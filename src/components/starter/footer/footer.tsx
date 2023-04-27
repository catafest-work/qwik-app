import { component$ } from '@builder.io/qwik';
import { useServerTimeLoader } from '~/routes/layout-site';
import styles from './footer.module.css';

export default component$(() => {
  const serverTime = useServerTimeLoader();

  return (
    <footer>
      <div class="bg-gray-900 text-white fixed bottom-0 left-0 w-screen" >This is my footer</div>
      <a href="https://www.builder.io/" target="_blank" class={styles.anchor}>
        Made with ♡ by Builder.io
        <span class={styles.spacer}>|</span>
        <span>{serverTime.value.date}</span>
      </a>
    </footer>
  );
});
