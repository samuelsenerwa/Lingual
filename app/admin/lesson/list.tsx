import {
  Datagrid,
  List,
  NumberInput,
  ReferenceField,
  TextField,
} from "react-admin";

export const LessonList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="title" />
        <ReferenceField source="unitId" reference="units" />
        <NumberInput source="order" />
      </Datagrid>
    </List>
  );
};
