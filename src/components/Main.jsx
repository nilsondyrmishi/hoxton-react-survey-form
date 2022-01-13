import { useState } from "react";
import RadioButtonsConsistency from "./Radio/RadioButtonsConsistency";
import RadioButtonsColour from "./Radio/RadioButtonsColour";
import RadioButtonsLogo from "./Radio/RadioButtonsLogo";
import CheckBoxWorstBit from "./CheckBoxes/CheckBoxWorstBit";
import CheckBoxSpentTime from "./CheckBoxes/CheckBoxSpentTime";
import CheckBoxBestFeature from "./CheckBoxes/CheckBoxBestFeature";
import Comment from "./Footer/Comment";
import Username from "./Footer/Username";
import Email from "./Footer/Email";

function Main(props) {
  const [open, setOpen] = useState(false); //Ignore this state

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="main__form">{<form className="form">
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group">
              <h3>What would you say that are the best features of your rubber duck?</h3>
              {/* <!-- checkboxes go here --> */}
              <CheckBoxBestFeature
                  formData={props.formData}
                  setFormData={props.setFormData}

              />
          </div>
          <div className="form__group">
              <h3>What would you say that are the worst bits of your rubber duck?</h3>
              {/* <!-- Checkboxes go here --> */}

              <CheckBoxWorstBit
                  formData={props.formData}
                  setFormData={props.setFormData}
              />
          </div>
          <div className="form__group radio">
              <h3>How do you rate your rubber duck consistency?</h3>

              <RadioButtonsConsistency
                  formData={props.formData}
                  setFormData={props.setFormData}
              />
          </div>
          <div className="form__group radio">
              <h3>How do you rate your rubber duck colour?</h3>

              <RadioButtonsColour
                  formData={props.formData}
                  setFormData={props.setFormData}
              />
          </div>
          <div className="form__group radio">
              <h3>How do you rate your rubber duck logo?</h3>

              <RadioButtonsLogo
                  formData={props.formData}
                  setFormData={props.setFormData}
              />
          </div>
          <div className="form__group">
              <h3>How do you like to spend time with your rubber duck</h3>
              {/* <!-- checkboxes go here --> */}
              <CheckBoxSpentTime
                  formData={props.formData}
                  setFormData={props.setFormData}
              />
          </div>

          <Comment
              formData={props.formData}
              setFormData={props.setFormData}
          />
          <Username
              formData={props.formData}
              setFormData={props.setFormData}
          />
          <Email
              formData={props.formData}
              setFormData={props.setFormData}
          />
          <input className="form__submit" type="submit" value="Submit Survey!" />
      </form>}</section>
    </main>
  );
}

export default Main;
