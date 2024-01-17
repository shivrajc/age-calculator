<script>
    // import '../styles/global.css';

    export let text = "";
    export let number = "--"
</script>

<div class="container">
    <span class="output-number">{number}</span>
    <span class="output-text">{text}</span>    
</div>

<style>
    .container {
        font-size: 92px;
        font-style: italic;
        font-weight: 800;
        height: 96px;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .output-number {
        color: var(--primary-purple);
    }

    .output-text {
        color: var(--off-black);
    }
</style>