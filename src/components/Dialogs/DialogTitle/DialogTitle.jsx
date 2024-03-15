import { NavLink } from "react-router-dom";

const DialogTitle = (props) =>(
    <div>
        <NavLink to={`/dialogs/${props.dialogInfo.id}`}>
            {props.dialogInfo.userName}
        </NavLink>
    </div>
);

export { DialogTitle };