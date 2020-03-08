use async_trait::async_trait;

use eventually::aggregate::referential::Aggregate as ReferentialAggregate;
use eventually::command;
use eventually::command::dispatcher::Identifiable;
use eventually::optional::{Aggregate, CommandHandler, EventOf, StateOf};

#[derive(Debug, Clone, PartialEq)]
pub enum Command {
    Register { id: String },
    GoUp { id: String, v: i32 },
    GoDown { id: String, v: i32 },
    GoLeft { id: String, v: i32 },
    GoRight { id: String, v: i32 },
}

impl Identifiable for Command {
    type SourceId = String;

    #[inline]
    fn source_id(&self) -> Self::SourceId {
        match self {
            Command::Register { id } => id.clone(),
            Command::GoUp { id, .. } => id.clone(),
            Command::GoDown { id, .. } => id.clone(),
            Command::GoLeft { id, .. } => id.clone(),
            Command::GoRight { id, .. } => id.clone(),
        }
    }
}

#[derive(Debug, Clone, PartialEq)]
pub enum Event {
    Registered { id: String },
    WentUp { v: i32 },
    WentDown { v: i32 },
    WentLeft { v: i32 },
    WentRight { v: i32 },
}

#[derive(Debug, PartialEq)]
pub enum CommandError {
    Unregistered(String),
    AlreadyRegistered(String),
}

impl std::error::Error for CommandError {}
impl std::fmt::Display for CommandError {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        match self {
            CommandError::Unregistered(id) => {
                write!(f, "Point '{}' has not been registered yet", id)
            }
            CommandError::AlreadyRegistered(id) => {
                write!(f, "Point '{}' has been registered already", id)
            }
        }
    }
}

#[derive(Debug, PartialEq)]
pub enum EventError {
    Unregistered,
    AlreadyRegistered,
}

impl std::error::Error for EventError {}
impl std::fmt::Display for EventError {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        match self {
            EventError::Unregistered => write!(f, "Point has not been registered yet"),
            EventError::AlreadyRegistered => write!(f, "Point has been registered already"),
        }
    }
}

#[derive(Debug, PartialEq)]
pub struct State {
    id: String,
    x: i32,
    y: i32,
}

impl ReferentialAggregate for State {
    type Event = Event;
    type Error = EventError;

    #[inline]
    fn apply(mut self, event: Self::Event) -> Result<Self, Self::Error> {
        match event {
            Event::Registered { .. } => return Err(EventError::AlreadyRegistered),
            Event::WentUp { v } => self.y += v,
            Event::WentDown { v } => self.y -= v,
            Event::WentLeft { v } => self.x -= v,
            Event::WentRight { v } => self.x -= v,
        };

        Ok(self)
    }
}

pub struct Root;
impl Aggregate for Root {
    type State = State;
    type Event = Event;
    type Error = EventError;

    #[inline]
    fn apply_first(event: Self::Event) -> Result<Self::State, Self::Error> {
        match event {
            Event::Registered { id } => Ok(State { id, x: 0, y: 0 }),
            _ => Err(EventError::Unregistered),
        }
    }

    #[inline]
    fn apply_next(state: Self::State, event: Self::Event) -> Result<Self::State, Self::Error> {
        state.apply(event)
    }
}

pub struct Handler;

#[async_trait]
impl CommandHandler for Handler {
    type Command = Command;
    type Aggregate = Root;
    type Error = CommandError;

    async fn handle_first(
        &self,
        command: Self::Command,
    ) -> command::Result<EventOf<Self::Aggregate>, Self::Error> {
        match command {
            Command::Register { id } => Ok(vec![Event::Registered { id }]),
            Command::GoUp { id, .. } => Err(CommandError::Unregistered(id)),
            Command::GoDown { id, .. } => Err(CommandError::Unregistered(id)),
            Command::GoLeft { id, .. } => Err(CommandError::Unregistered(id)),
            Command::GoRight { id, .. } => Err(CommandError::Unregistered(id)),
        }
    }

    async fn handle_next(
        &self,
        _state: &StateOf<Self::Aggregate>,
        command: Self::Command,
    ) -> command::Result<EventOf<Self::Aggregate>, Self::Error> {
        match command {
            Command::Register { id } => Err(CommandError::AlreadyRegistered(id)),
            Command::GoUp { v, .. } => Ok(vec![Event::WentUp { v }]),
            Command::GoDown { v, .. } => Ok(vec![Event::WentDown { v }]),
            Command::GoLeft { v, .. } => Ok(vec![Event::WentLeft { v }]),
            Command::GoRight { v, .. } => Ok(vec![Event::WentRight { v }]),
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    use eventually::command::dispatcher::{DirectDispatcher, Error};
    use eventually::command::Dispatcher;

    #[test]
    fn dispatcher_returns_a_command_failed_error_when_handler_fails() {
        let store = eventually_memory::Store::<String, Event>::default();
        let handler = Handler.as_handler();

        let mut dispatcher = DirectDispatcher::new(store, handler);

        let result = tokio_test::block_on(dispatcher.dispatch(Command::GoUp {
            id: "test".to_string(),
            v: 10,
        }));

        assert_eq!(
            result,
            Err(Error::CommandFailed(CommandError::Unregistered(
                "test".to_string()
            )))
        );
    }

    #[test]
    fn dispatcher_returns_latest_state_if_no_error_has_happened() {
        let store = eventually_memory::Store::<String, Event>::default();
        let handler = Handler.as_handler();

        let mut dispatcher = DirectDispatcher::new(store, handler);

        let result = tokio_test::block_on(dispatcher.dispatch(Command::Register {
            id: "test".to_string(),
        }));

        assert_eq!(
            result.unwrap().as_ref(),
            Some(&State {
                id: "test".to_string(),
                x: 0,
                y: 0
            })
        );
    }
}
