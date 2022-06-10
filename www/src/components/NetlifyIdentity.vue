<script lang="js">
import { onMounted } from "vue";

export default {
  setup () {
    onMounted(() => {
  if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", (user) => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }
    return {}
  })
}
}
</script>

<style lang="scss" scoped></style>
