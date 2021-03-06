import { ref, defineComponent } from "vue";
import "./HelloWorld";

type Props = {
  msg: string;
};

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: (props: Props) => {
    const count = ref(0);
    return () => (
      <>
        <h1>{props.msg}</h1>
        <p>
          Recommended IDE setup:
          <a href="https://code.visualstudio.com/" target="_blank">
            VSCode
          </a>
          +
          <a
            href="https://marketplace.visualstudio.com/items?itemName=octref.vetur"
            target="_blank"
          >
            Vetur
          </a>
          or
          <a href="https://github.com/johnsoncodehk/volar" target="_blank">
            Volar
          </a>
          (if using
          <code>&lt;script setup&gt;</code>)
        </p>
        <p>
          See <code>README.md</code> for more information.
        </p>
        <p>
          <a href="https://vitejs.dev/guide/features.html" target="_blank">
            Vite Docs
          </a>
          |
          <a href="https://v3.vuejs.org/" target="_blank">
            Vue 3 Docs
          </a>
        </p>
        <button onClick={() => count.value++}>count is: {count}</button>
        <p>
          Edit
          <code>components/HelloWorld.vue</code> to test hot module replacement.
        </p>
      </>
    );
  },
});
