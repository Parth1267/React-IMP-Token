import React from "react";
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";

export default function SmallStepSize() {
  const handleComplete = () => {
    console.log("Form completed!");
    // Handle form completion logic here
  };
  return (
    <>
      <FormWizard
        stepSize="sm"
        onComplete={handleComplete}
      >
        <FormWizard.TabContent title="Personal details" icon="ti-user">
         
        </FormWizard.TabContent>
        <FormWizard.TabContent title="Additional Info" icon="ti-settings">
         
        </FormWizard.TabContent>
        <FormWizard.TabContent title="Last step" icon="ti-check">
        </FormWizard.TabContent>

        <FormWizard.TabContent title="Last step2" icon="ti-check">
        </FormWizard.TabContent>

        <FormWizard.TabContent title="Last step 3" icon="ti-check">
        </FormWizard.TabContent>
      </FormWizard>
      {/* add style */}
      <style>{`
        @import url("https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css");
      `}</style>
    </>
  );
}