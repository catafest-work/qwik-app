import { component$, useStore , $ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
// import button from component
import { Button } from '~/components/button';

export default component$(() => {
  const state = useStore({name:"unassigned"});
  // you can see $ is imported 
  const handleName = $(() => {
    state.name = "Catalin George Festila"
  })

  return (
    <>
     <h1>Test page !</h1>
     <Button handleFunction = {handleName} />
     <div>The name is : {state.name}</div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Test page !',
  meta: [
    {
      name: 'description',
      content: 'Hello from my test page !',
    },
  ],
};