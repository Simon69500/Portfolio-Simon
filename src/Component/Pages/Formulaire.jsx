import '@scss/index.scss';
import Form from './Form';

export default function BasicTextFields() {

  return (

    <div className="contact d-flex flex-column align-items-center pb-5">
      <h2 className="title fs-1 text-center py-5">Me contacter</h2>

          {/* formulaire */}
          <Form/>
    </div>
  );
}
