import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
export const Navigation = component$(() => {
  return (
  // <div>Hello Qwik!</div>
  <div class="flex items-center justify-between bg-white shadow-xl py-5">
    <div class="ml-5">LOGO</div>
    <div class="mr-5">
      <ul class="flex space-x-10 text-blue-800">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/tester">Tester</Link></li>
      </ul>
    </div>
  </div>
  )
});