(function() {var implementors = {};
implementors["eventually_app_example"] = [{"text":"impl Send for Config","synthetic":true,"types":[]},{"text":"impl Send for TotalOrdersProjection","synthetic":true,"types":[]},{"text":"impl Send for OrderItem","synthetic":true,"types":[]},{"text":"impl Send for OrderItems","synthetic":true,"types":[]},{"text":"impl Send for Order","synthetic":true,"types":[]},{"text":"impl Send for OrderAggregate","synthetic":true,"types":[]},{"text":"impl Send for OrderState","synthetic":true,"types":[]},{"text":"impl Send for OrderCommand","synthetic":true,"types":[]},{"text":"impl Send for OrderEvent","synthetic":true,"types":[]},{"text":"impl Send for OrderError","synthetic":true,"types":[]}];
implementors["eventually_core"] = [{"text":"impl&lt;T&gt; Send for AggregateRootBuilder&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for AggregateRoot&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Aggregate&gt;::Event: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Aggregate&gt;::Id: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Aggregate&gt;::State: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T, Store&gt; Send for Repository&lt;T, Store&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Store: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A, S&gt; Send for Error&lt;A, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;SourceId, T&gt; Send for Persisted&lt;SourceId, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;SourceId: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Select","synthetic":true,"types":[]},{"text":"impl Send for Expected","synthetic":true,"types":[]},{"text":"impl&lt;SourceId, T&gt; Send for EventBuilder&lt;SourceId, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;SourceId: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;SourceId, T&gt; Send for EventBuilderWithVersion&lt;SourceId, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;SourceId: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;SourceId, T&gt; Send for EventBuilderWithSequenceNumber&lt;SourceId, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;SourceId: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Store, Subscriber&gt; Send for Transient&lt;Store, Subscriber&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Store: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Subscriber: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]}];
implementors["eventually_postgres"] = [{"text":"impl Send for EventStoreBuilder","synthetic":true,"types":[]},{"text":"impl Send for EventStoreBuilderMigrated","synthetic":true,"types":[]},{"text":"impl&lt;Id, Event&gt; Send for EventStore&lt;Id, Event&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Event: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Id: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for DeserializeError","synthetic":true,"types":[]},{"text":"impl&lt;Id, Event&gt; Send for EventSubscriber&lt;Id, Event&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Event: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Id: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;SourceId, Event&gt; Send for PersistentBuilder&lt;SourceId, Event&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Event: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;SourceId: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;SourceId, Event&gt; Send for Persistent&lt;SourceId, Event&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Event: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;SourceId: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]}];
implementors["eventually_redis"] = [{"text":"impl Send for EventStoreBuilder","synthetic":true,"types":[]},{"text":"impl&lt;Id, Event&gt; Send for EventStore&lt;Id, Event&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Event: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Id: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Id, Event&gt; Send for EventSubscriber&lt;Id, Event&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Event: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Id: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for StoreError","synthetic":true,"types":[]},{"text":"impl Send for SubscriberError","synthetic":true,"types":[]}];
implementors["eventually_util"] = [{"text":"impl&lt;P, S&gt; Send for Projector&lt;P, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for ConflictError","synthetic":true,"types":[]},{"text":"impl Send for SubscriberError","synthetic":true,"types":[]},{"text":"impl Send for EventStoreBuilder","synthetic":true,"types":[]},{"text":"impl&lt;Id, Event&gt; Send for EventStore&lt;Id, Event&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Event: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Id: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Send for AsAggregate&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Send,&nbsp;</span>","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()