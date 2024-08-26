import {
  Create,
  NumberInput,
  ReferenceInput,
  required,
  SimpleForm,
  TextInput,
} from "react-admin";

export const UnitCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <NumberInput source="order" label="Order" validate={[required()]} />
        <TextInput source="title" label="Title" validate={[required()]} />

        <TextInput
          source="description"
          label="Description"
          validate={[required()]}
        />

        <ReferenceInput source="courseId" reference="courses" />
      </SimpleForm>
      <SimpleForm>
        <NumberInput source="order" label="Order" validate={[required()]} />
        <TextInput source="title" label="Title" validate={[required()]} />

        <TextInput
          source="description"
          label="Description"
          validate={[required()]}
        />

        <ReferenceInput source="courseId" reference="courses" />
      </SimpleForm>
    </Create>
  );
};
