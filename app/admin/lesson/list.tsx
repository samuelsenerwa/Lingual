import {
  Datagrid,
  List,
  NumberField,
  ReferenceField,
  TextField,
} from "react-admin";

export const LessonList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <NumberField source="order" />
        <TextField source="title" />
        <ReferenceField source="unitId" reference="units" />
      </Datagrid>
    </List>
  );
};
