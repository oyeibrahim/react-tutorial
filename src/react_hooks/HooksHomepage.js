import './Styles.css';
import Contents from './HomeText';
import StateCounter from './use_state/StateCounter';
import StateCounterWithPrev from './use_state/StateCounterWithPrev';
import StateCounterWithObject from './use_state/StateCounterWithObject';
import StateCounterWithArray from './use_state/StateCounterWithArray';
import EffectCounter from './use_effect/EffectCounter';
import EffectCounterConditional from './use_effect/EffectCounterConditional';
import EffectOnlyOnce from './use_effect/EffectOnlyOnce';
import EffectUnmountParent from './use_effect/EffectUnmountParent';
import EffectHttpRequest from './use_effect/EffectHttpRequest';
import ComponentA from './use_context/ComponentA';
import { UserProvider } from './use_context/infoContext';
import ReducerCounter from './use_reducer/ReducerCounter';
import ReducerCounterComplex from './use_reducer/ReducerCounterComplex';
import ReducerCounterMultiple from './use_reducer/ReducerCounterMultiple';
import HttpWithUseState from './use_effect/HttpWithUseState';
import HttpWithUseReducer from './use_effect/HttpWithUseReducer';
import ParentCompMandC from './memo_and_callback/ParentCompMandC';
import MemoCounter from './use_memo/MemoCounter';
import RefFocusInput from './use_ref/RefFocusInput';
import RefTimer from './use_ref/RefTimer';
// import DocumentTitleHookUsage from './custom_hook/DocumentTitleHookUsage';
import CounterHookUsage1 from './custom_hook/CounterHookUsage1';
import CounterHookUsage2 from './custom_hook/CounterHookUsage2';
import InputHookUsage from './custom_hook/InputHookUsage';

function HooksHomepage() {

  // To redirect, use props.history.push('/hooks')
  // This below is an auto redirect that will execute 2 seconds after page load
  // setTimeout(() => {
  //   props.history.push('/')
  // }, 2000);


  return (
    <div className="App">
      <header className="App-header">

        <Contents />
        <hr></hr>

        <StateCounter />
        <hr></hr>

        <StateCounterWithPrev />
        <hr></hr>

        <StateCounterWithObject />
        <hr></hr>

        <StateCounterWithArray />
        <hr></hr>

        <EffectCounter />
        <hr></hr>

        <EffectCounterConditional />
        <hr></hr>

        <EffectOnlyOnce />
        <hr></hr>

        <EffectUnmountParent />
        <hr></hr>

        <EffectHttpRequest />
        <hr></hr>

        <UserProvider value="Ibrahim Oyetunji">
          <ComponentA />
        </UserProvider>
        <hr></hr>

        <ReducerCounter />
        <hr></hr>

        <ReducerCounterComplex />
        <hr></hr>

        <ReducerCounterMultiple />
        <hr></hr>

        <HttpWithUseState />
        <hr></hr>

        <HttpWithUseReducer />
        <hr></hr>

        <ParentCompMandC />
        <hr></hr>

        <MemoCounter />
        <hr></hr>

        <RefFocusInput />
        <hr></hr>

        <RefTimer />
        <hr></hr>

        {/* <DocumentTitleHookUsage />
        <hr></hr> */}

        <CounterHookUsage1 />
        <CounterHookUsage2 />
        <hr></hr>

        <InputHookUsage />
        <hr></hr>

      </header>
    </div>
  );
}

export default HooksHomepage;
