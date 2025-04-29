
import Button from './button';

export default function ParentComponent() {
  return (
    <div>
      <section id="section1">
        <h1>Section 1</h1>
        <Button nextSectionId="section2">Go to Section 2</Button>
      </section>
      <section id="section2">
        <h1>Section 2</h1>
        <Button nextSectionId="section3">Go to Section 3</Button>
      </section>
      <section id="section3">
        <h1>Section 3</h1>
      </section>
    </div>
  );
}