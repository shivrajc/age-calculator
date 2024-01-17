<script>
  import AgeOutput from './lib/MobileAgeOutput.svelte';
  import NumberInput from './lib/MobileNumberInput.svelte';
  import iconArrow from './assets/icon-arrow.svg';

    let day = "";
    let month = "";
    let year = "";

    let years = "--";
    let months = "--";
    let days = "--";

    // $: errorState = [day === "", month === "", year === ""];

    let invalidDate = false;

    function isDateValid(dateStr) {
        return !isNaN(new Date(dateStr));
    }

    function resetValues() {
        invalidDate = false;
        years = "--";
        months = "--";
        days = "--";
    }


    function handleInputChange(event) {
        if (event.detail.label === "DAY") {
            day = event.detail.value;
            resetValues();
        };
        if (event.detail.label === "MONTH") {
            month = event.detail.value;
            resetValues();
        }
        if (event.detail.label === "YEAR") {
            year = event.detail.value;
            resetValues();
        }
    }

    function handleSubmit() {
        if (day === "" || month === "" || year === "") return
        
        const dateString = `${year}/${month}/${day}`;
        if (! isDateValid(dateString)) {
            invalidDate = true;
            return
        }
        
        const dateObj = new Date(dateString);

        if (dateObj.getDate() !== Number(day) || dateObj.getMonth() + 1 !== Number(month) || dateObj.getFullYear() !== Number(year)) {
            invalidDate = true;
            return            
        }

        const now = new Date();
        const currentYear = now.getUTCFullYear();
        const currentMonth = (now.getMonth() + 1);
        const currentDay = now.getDate();

        let yearD = currentYear - Number(year);
        let monthD = currentMonth - Number(month);
        let dayD = currentDay - Number(day);


        let _years, _months, _days;

        function getDaysInMonth(_month, _year) {
            const isLeapYear = _year % 4 === 0 && (_year % 100 != 0 || _year % 400 === 0);
            const getDaysInMonth = [
                31, 
                isLeapYear ? 29 : 28,
                31,
                30,
                31,
                30,
                31,
                31,
                30,
                31,
                30,
                31,
            ];
            return getDaysInMonth[_month - 1];
        };    

        if (monthD === 0 && dayD < 0) {
            _years = yearD - 1;
            _months = 11;
            _days = (getDaysInMonth(month, year) - day) + currentDay;
        } 
        else if (monthD === 0 && dayD === 0) {
            _years = yearD;
            _months = 0;
            _days = 0;            
        } 
        else if (monthD === 0 && dayD > 0) {
            _years = yearD;
            _months = 0;
            _days = dayD;            
        } 

        else if (monthD < 0 && dayD < 0) {
            _years = yearD - 1;
            _months = 11 + monthD;
            _days = (getDaysInMonth(month, year) - day) + currentDay;            
        } 
        else if (monthD < 0 && dayD === 0) {
            _years = yearD - 1;
            _months = 12 + monthD;
            _days = 0;            
        } 
        else if (monthD < 0 && dayD > 0) {
            _years = yearD - 1;
            _months = 12 + monthD;
            _days = dayD;            
        } 

        else if (monthD > 0 && dayD < 0) {
            _years = yearD;
            _months = monthD - 1;
            _days = (getDaysInMonth(month, year) - day) + currentDay;             
        } 
        else if (monthD > 0 && dayD === 0) {
            _years = yearD;
            _months = monthD;
            _days = 0;            
        } 
        else if (monthD > 0 && dayD > 0) {
            _years = yearD;
            _months = monthD;
            _days = dayD;            
        } 

        years = String(_years);
        months = String(_months);
        days = String(_days);
    }  
</script>

<main>
  <!-- <h1>AGE CALCULATOR</h1> -->
  <div class="container">
    
    <div class="form">
        <form on:submit|preventDefault={handleSubmit}>
            <div class="input-controls">
                <NumberInput label="DAY" placeholder="DD" on:input-change={handleInputChange}/>
                <NumberInput label="MONTH" placeholder="MM" on:input-change={handleInputChange}/>
                <NumberInput label="YEAR" placeholder="YYYY" on:input-change={handleInputChange}/>
            </div>
            <div class="button-group">
                <div class="hr">
                    <p class="invalid-date-label" class:invalid-date={invalidDate}>Must be a valid date</p>
                    <button type="submit"><img src={iconArrow} alt=""></button>                
                </div>
            </div>
            <div class="output">
                <AgeOutput number={years} text={years === "1" ? "year" : "years"} />
                <AgeOutput number={months} text={months === "1" ? "month" : "months"} />
                <AgeOutput number={days} text={days === "1" ? "day" : "days"} />
            </div>
        </form>
    </div>
  </div>
</main>

<style>
  /* main {
    position: relative;
  }

  h1 {
    position: absolute;
    top: -160px;
    font-size: 56px;
    font-style: italic;
  } */

  main {
    min-width: 375px;
    /* height: 100vh; */
    padding-top: 60px;
    display: flex;
    justify-content: center;
    /* align-items: top; */
  }

  .container {
      max-width: 80%;
      /* min-width: 650px;
      max-width: 1440px; */
      background: white;
      margin: 20px auto;
      padding: 48px 24px;
      border-radius: 24px 24px 28% 24px;
  }

  button {
      width: 60px;
      height: 60px;        
      background-color: hsl(259, 100%, 65%); 
      border-radius: 50%;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 12px;
      cursor: pointer;
  }
  button:hover, button:active {
      background-color: var(--off-black);
  }

  img {
      width: 24px;
      height: 24px;
  }

  .input-controls {
      display: flex;
      gap: 16px;
  }

  .hr {
      position: relative;
      height: 1px;
      background-color: var(--light-gray);  
      margin: 56px 0 56px 0;      
  }

  button {
      position: absolute;
      top: -32px;
      left: 40%;
  }

  .invalid-date-label {
      font-size: 12px;
      font-weight: 400;
      font-style: italic;
      color: var(--light-red);
      position: absolute;
      top: -70px;
      padding-left: 2px;
      visibility: hidden;
  }

  .invalid-date {
      visibility: visible;
  }
</style>