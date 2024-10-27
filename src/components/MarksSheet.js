import React,{ useRef } from "react";

function MarksSheet() {
  let telInputRef = useRef();
  let hinInputRef = useRef();
  let engInputRef = useRef();
  let matInputRef = useRef();
  let sciInputRef = useRef();
  let socInputRef = useRef();

  let resultLabelref= useRef();

  let FirstnameInputRef = useRef();
  let LastnameInputRef = useRef();

  let telSpanRef =useRef();
  let engSpanRef= useRef();
  let hinSpanRef=useRef();
  let matSpanRef=useRef();
  let sciSpanRef=useRef();
  let socSpanRef=useRef();
  return (
    <div>
        <form>
            <h2>SSC Examination Result</h2>
            <fieldset>
                <legend>Personal Details</legend>
      <div>
        <label>First Name</label>
        <input ref={FirstnameInputRef}></input>
      </div>

      <div>
        <label>Last Name</label>
        <input ref={LastnameInputRef}></input>
      </div>
      </fieldset>
<fieldset>
    <legend>Marks Details</legend>
      <div>
        <label>Telugu</label>
        <input type="number" ref={telInputRef}
        onFocus={()=>{
            telInputRef.current.style.backgroundColor="lightblue"
        }}
        onChange={()=>{
            if(telInputRef.current.value >=35){
                telSpanRef.current.innerHTML="😄Pass";
                telSpanRef.current.style.backgroundColor="green";
            }
            else{
                telSpanRef.current.innerHTML="😔Fail";
                telSpanRef.current.style.backgroundColor="red";
            }
        }}
        onBlur={()=>{
            telSpanRef.current.style.backgroundColor="  ";
        }}
        ></input>
        <span ref={telSpanRef}></span>
      </div>


      <div>
        <label>English</label>
        <input type="number" ref={engInputRef}
        onFocus={()=>{
            engInputRef.current.style.backgroundColor="lightblue"
        }}
        onChange={()=>{
            if(engInputRef.current.value >=35){
                engSpanRef.current.innerHTML="😄Pass";
                engSpanRef.current.style.backgroundColor="green";
            }
            else{
                engSpanRef.current.innerHTML="😔Fail";
                engSpanRef.current.style.backgroundColor="red";
            }
        }}
        onBlur={()=>{
            engSpanRef.current.style.backgroundColor="  ";
        }}
        ></input>
        <span ref={engSpanRef}></span>
      </div>


      <div>
        <label>Hindi</label>
        <input type="number" ref={hinInputRef}
        onFocus={()=>{
            hinInputRef.current.style.backgroundColor="lightblue"
        }}
        onChange={()=>{
            if(hinInputRef.current.value >=35){
                hinSpanRef.current.innerHTML="😄Pass";
                hinSpanRef.current.style.backgroundColor="green";
            }
            else{
                hinSpanRef.current.innerHTML="😔Fail";
                hinSpanRef.current.style.backgroundColor="red";
            }
        }}
        onBlur={()=>{
            hinSpanRef.current.style.backgroundColor="  ";
        }}
        ></input>
        <span ref={hinSpanRef}></span>
      </div>


      <div>
        <label>Maths</label>
        <input type="number" ref={matInputRef}
        onFocus={()=>{
            matInputRef.current.style.backgroundColor="lightblue"
        }}
        onChange={()=>{
            if(matInputRef.current.value >=35){
                matSpanRef.current.innerHTML="😄Pass";
                matSpanRef.current.style.backgroundColor="green";
            }
            else{
                matSpanRef.current.innerHTML="😔Fail";
                matSpanRef.current.style.backgroundColor="red";
            }
        }}
        onBlur={()=>{
            matSpanRef.current.style.backgroundColor="  ";
        }}
        ></input>
        <span ref={matSpanRef}></span>
      </div>

      <div>
        <label>Science</label>
        <input type="number" ref={sciInputRef}
        onFocus={()=>{
            sciInputRef.current.style.backgroundColor="lightblue"
        }}
        onChange={()=>{
            if(sciInputRef.current.value >=35){
                sciSpanRef.current.innerHTML="😄Pass";
                sciSpanRef.current.style.backgroundColor="green";
            }
            else{
                sciSpanRef.current.innerHTML="😔Fail";
                sciSpanRef.current.style.backgroundColor="red";
            }
        }}
        onBlur={()=>{
            sciSpanRef.current.style.backgroundColor="  ";
        }}
        ></input>
        <span ref={sciSpanRef}></span>
      </div>


      <div>
        <label>Social</label>
        <input type="number" ref={socInputRef}
        onFocus={()=>{
            socInputRef.current.style.backgroundColor="lightblue"
        }}
        onChange={()=>{
            if(socInputRef.current.value >=35){
                socSpanRef.current.innerHTML="😄Pass";
                socSpanRef.current.style.backgroundColor="green";
            }
            else{
                socSpanRef.current.innerHTML="😔Fail";
                socSpanRef.current.style.backgroundColor="red";
            }
        }}
        onBlur={()=>{
            socSpanRef.current.style.backgroundColor="  ";
        }}
        ></input>
        <span ref={socSpanRef}></span>
      </div>
      </fieldset>
      <div>
        <button type="button" onClick={()=>{
             let Firstname= (FirstnameInputRef.current.value);
             let Lastname= (LastnameInputRef.current.value);
             let telMarks= Number(telInputRef.current.value);
             let engMarks= Number(engInputRef.current.value);
             let hinMarks= Number(hinInputRef.current.value);
             let matMarks= Number(matInputRef.current.value);
             let sciMarks= Number(sciInputRef.current.value);
             let socMarks= Number(socInputRef.current.value);
             let totalMarks= telMarks+engMarks+hinMarks+matMarks+sciMarks+socMarks;
             let perc= totalMarks/600*100;
             
             alert(`${Firstname} ${Lastname} Total Marks are ${totalMarks} with ${perc.toFixed(2)}%`)
             resultLabelref.current.innerHTML=`${Firstname} ${Lastname} Total Marks are ${totalMarks} with ${perc.toFixed(2)}%`
        }}
        >Result</button>
      </div>
      <div>
            <label ref={resultLabelref}></label>
        </div>
      </form>
    </div>
  );
}

export default MarksSheet;
