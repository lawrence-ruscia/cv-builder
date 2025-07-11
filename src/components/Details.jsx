import { PersonalDetails } from './PersonalDetails';
import { EducationDetails } from './EducationDetails';
import { ProfessionalDetails } from './ProfessionalDetails';
export const Details = () => {
  return (
    <section id='details'>
      <PersonalDetails />
      <EducationDetails />
      <ProfessionalDetails />
    </section>
  );
};
