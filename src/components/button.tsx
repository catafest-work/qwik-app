import { component$,useTask$,useSignal,useStore, $} from "@builder.io/qwik";

// interface for handleFunctions

interface ItemProps {
  handleFunction?: any;
};

export const Button = component$((props:ItemProps) => {
  const message = useSignal("Signal is None");
  const state = useStore({message: "State is None", color:"No color"});
  // useTask$(() => {
  //   // using signal
  //   console.log(message.value);
  //   // use state
  //   console.log(state.message, state.color);
  //   const timeout = setTimeout(() => {
  //     console.log("5 seconds timeout says " + message.value)
  //   },5000);

  // })

  //console.log("hello")
  const handeClick = $(() => {
    state.message = "Button clicked";
    props.handleFunction()
  });

  useTask$(({track}) => {
    track(state);
    console.log(state.message)
  });
  
  return(
    <>
    <button onClick$={() =>state.message="Somebody click me!"} class="bg-sky-500 py-2 px-4 rounded-sm text-white hover:bg-sky-400">
    Click me 
    </button>
    {/* the new button with handleFunction */}
    <button onClick$={handeClick} class="bg-sky-500 py-2 px-4 rounded-sm text-white hover:bg-sky-400">
    Click me to handle
    </button>
    </>
  )
})