<script>
  import DesktopApp from './DesktopApp.svelte';
  import MobileApp from './MobileApp.svelte';
  import MediaQuery from './MediaQuery.svelte';
</script>

<main>
    <MediaQuery query="(min-width: 500px)" let:matches>
      {#if matches}
            <DesktopApp />    
      {/if}
    </MediaQuery>
    
    <MediaQuery query="(max-width: 500px)" let:matches>
      {#if matches}
            <MobileApp />
      {/if}
    </MediaQuery>         

</main>

<style>
</style>