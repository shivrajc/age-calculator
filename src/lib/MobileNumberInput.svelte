<script>
    import { createEventDispatcher } from 'svelte';

    export let label = "Label";
    export let placeholder = "Number";
    let value = "";
    let error = null;

    const dispatch = createEventDispatcher();

    function handleChange(v) {
        value = v;
        if (value === "") error = "This field is required";
        
        if (label === "DAY") {
            if (value < 1 || value > 31) {
                error = "Must be a valid day";
                value = ""
            }
            else error = null
        }
        if (label === "MONTH") {
            if (value < 1 || value > 12) {
                error = "Must be a valid month";
                value = "";
            }
            else error = null
        }
        if (label === "YEAR") {
            if (value > new Date().getFullYear()) {
                error = "Must be in the past";
                value = "";
            } else if (value < 1) {
                error = "Must be a valid year";
                value = "";
            }
            else error = null
        }        
        
        dispatch('input-change', {label, error, value})
    }

</script>


<div class="container">
    <label for={label} class:label-error={error !== null}>{label.toUpperCase()}</label>
    <input id={label} type="number" placeholder={placeholder.toUpperCase()} on:input={e => handleChange(e.target.value)} class:input-error={error !== null}>
    <div class="error-container">
        <p class:error={error !== null} class="error-label">{error}</p>
    </div>
</div>


<style>
    .container {
        display: flex;
        flex-direction: column;
        gap: 8px;
        font-family: 'Poppins', sans-serif;
    }    
    ::placeholder {
        font-size: 18px;
        font-weight: bold;
        color: hsl(0, 0%, 72%);
    }
    label {
        font-size: 11px;
        letter-spacing: 2px;
        font-weight: 400;
        color: hsl(0, 0%, 50%);
        padding-left: 2px;
    }
    input {
        font-family: 'Poppins', sans-serif;
        width: 64px;        
        height: 32px;
        font-size: 20px;
        font-weight: 800;
        padding: 8px 12px;
        border-radius: 8px;
        border: 1px solid hsl(0, 0%, 86%);
        letter-spacing: 2px;
    }

    input:focus {        
        outline: 1px solid var(--primary-purple);
    }

    input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button { 
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        margin: 0; 
    }    
    .error-container {
        position: relative;
        font-size: 8px;
        font-weight: 400;
        font-style: italic;
        color: var(--light-red);
        padding-left: 2px;
        height: 4px;
    }    
    .input-error, .input-error:focus {
        border: 1px solid var(--light-red);
        outline: none;
    }

    .error-label {
        visibility: hidden;
    }

    .label-error {
        color: var(--light-red);
    }

    .error {
        position: absolute;
        top: -10px;
        visibility: visible;
    }
</style>