import './Styles.css';
import Contents from './HomeText';
import TestFunctional from './TestFunctional';
import TestClass from './TestClass';
import PassPropsFunc from './passing_props/PassPropsFunc';
import PassPropsClass from './passing_props/PassPropsClass';
import StateExampleClass from './state_in_class_component/StateExampleClass';
import ClickEventFunc from './event_handling/ClickEventFunc';
import ClickEventClass from './event_handling/ClickEventClass';
import EventBindClass from './event_handling/EventBindClass';
import ParentComponentPMP from './passing_method_as_prop/ParentComponentPMP';
import UserGreeting from './conditional_rendering/UserGreeting';
// import E1ListWithoutKeys from './list_rendering/E1ListWithoutKeys';
import E2ListWithKeys from './list_rendering/E2ListWithKeys';
import E3IndexAsKeys from './list_rendering/E3IndexAsKeys';
import NoConditionStyling from './styling/NoConditionStyling';
import ConditionalStyling from './styling/ConditionalStyling';
import Form from './form_handling/Form';
import LifecycleParent from './component_lifecycle/LifecycleParent';
import FragmentDemo from './fragments/FragmentDemo';
import ParentComponentPCD from './pure_component/ParentComponentPCD';
import ParentComponentMemo from './memo/ParentComponentMemo';
import CreateRefApproach from './refs/CreateRefApproach';
import CallbackRefApproach from './refs/CallbackRefApproach';
import RefWithClassParent from './refs/RefWithClassParent';
import RefForwardingParent from './refs/RefForwardingParent';
import PortalsDemo from './portals/PortalsDemo';
import UiDisplayEH from './error_handling/UiDisplayEH';
import ErrorBoundary from './error_handling/ErrorBoundary';
import ClickCounterHOC from './higher_order_components/ClickCounterHOC';
import HoverCounterHOC from './higher_order_components/HoverCounterHOC';
import RenderProp from './render_props/RenderProp';
import ClickCounterRP from './render_props/ClickCounterRP';
import HoverCounterRP from './render_props/HoverCounterRP';
import ComponentA from './context/ComponentA';
import { UserProvider } from './context/infoContext';
import HttpGetRequest from './http_request/HttpGetRequest';
import HttpPostRequest from './http_request/HttpPostRequest';

function Homepage(props) {

  // To redirect, use props.history.push('/hooks')
  // This below is an auto redirect that will execute 2 seconds after page load
  // setTimeout(() => {
  //   props.history.push('/hooks')
  // }, 2000);
  
  return (
    <div className="App">
      <header className="App-header">

        <Contents />
        <hr></hr>

        <TestFunctional />
        <TestClass />
        <hr></hr>

        <PassPropsFunc name="Oyetunji Ibrahim" expert="Java, PHP and JavaScript" />
        {/* Passing props of unknown name */}
        <PassPropsFunc name="Oyetunji Ibrahim" expert="Java, PHP and JavaScript">
          <p>This is treated as a prop and is with unknown name. The above name and expert still stand</p>
        </PassPropsFunc>
        <hr></hr>

        <PassPropsClass name="Oyetunji Ibrahim" expert="Java, PHP and JavaScript" />
        {/* Passing props of unknown name */}
        <PassPropsClass name="Oyetunji Ibrahim" expert="Java, PHP and JavaScript">
          <p>This is treated as a prop and is with unknown name. The above name and expert still stand</p>
        </PassPropsClass>
        <hr></hr>

        <StateExampleClass />
        <hr></hr>

        <ClickEventFunc />
        <hr></hr>

        <ClickEventClass />
        <hr></hr>

        <EventBindClass />
        <hr></hr>

        <ParentComponentPMP />
        <hr></hr>

        <UserGreeting />
        <hr></hr>

        {/* Commented because it gives warning, when you uncomment, remember to uncomment the import also */}
        {/* <E1ListWithoutKeys />
        <hr></hr> */}

        <E2ListWithKeys />
        <hr></hr>

        <E3IndexAsKeys />
        <hr></hr>

        <NoConditionStyling />
        <hr></hr>

        <ConditionalStyling make_bold={false} />
        <hr></hr>

        <Form />
        <hr></hr>

        <LifecycleParent />
        <hr></hr>

        <FragmentDemo />
        <hr></hr>

        <ParentComponentPCD />
        <hr></hr>

        <ParentComponentMemo />
        <hr></hr>

        <CreateRefApproach />
        <CallbackRefApproach />
        <RefWithClassParent />
        <RefForwardingParent />
        <hr></hr>

        {/* This displays in portal-root div and not the root div */}
        <PortalsDemo />
        <hr></hr>

        {/* -------------------------------------------------------- */}
        <p>Error Handling using ErrorBoundary</p>
        <p>
          Programming Languages are listed below, passed in as prop. If React is passed in, the
          an error will be thrown saying - Not a Programming Language!
        </p>

        <ErrorBoundary>
          <UiDisplayEH name="Java" />
        </ErrorBoundary>

        <ErrorBoundary>
          <UiDisplayEH name="PHP" />
        </ErrorBoundary>

        {/* This throws the error */}
        {/* <ErrorBoundary>
          <UiDisplayEH name="React" />
        </ErrorBoundary> */}
        <hr></hr>
        {/* -------------------------------------------------------- */}

        {/* -------------------------------------------------------- */}
        <p>Higher Order Component</p>
        <p>
          The two click and hover track below is implemented with HOC
        </p>
        {/* NOTE - props passed in here goes to the Enhancer, so you must go and pass down */}
        {/* these props to the enhanced components from the Enhancer */}
        <ClickCounterHOC name="Clicker" />
        <HoverCounterHOC name="Hoverer" />
        <hr></hr>
        {/* -------------------------------------------------------- */}

        {/* -------------------------------------------------------- */}
        <p>Render Props</p>
        <p>
          The two click and hover track below is implemented with Render Props
        </p>

        {/* Call RenderProp, NOTE - the counters are just displaying the info */}
        {/* as RenderProp is doing all the technicalities */}
        <RenderProp
          render={(count, incrementCount) => (
            <ClickCounterRP count={count} incrementCount={incrementCount} />
          )}
        />

        <RenderProp
          render={(count, incrementCount) => (
            <HoverCounterRP count={count} incrementCount={incrementCount} />
          )}
        />
        <hr></hr>
        {/* -------------------------------------------------------- */}

        {/* Pass the context to the component as "value" and it will propergate to all its children */}
        {/* pass in the context info as prop */}
        <UserProvider value="Ibrahim Oyetunji">
          <ComponentA />
        </UserProvider>

        {/* To use default value, then remove the UserProvider wrapper */}
        {/* <ComponentA /> */}
        <hr></hr>

        <HttpGetRequest />
        <hr></hr>

        <HttpPostRequest />
        <hr></hr>

      </header>
    </div>
  );
}

export default Homepage;
