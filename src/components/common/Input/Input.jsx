import InputStyles from './Input.module.scss';
import * as cn from 'classname';

const ControlWithValidationMessage = ({meta, ...props}) => {
    const isHasError = meta.touched && !!meta.error;
    return (
        <div className={ cn({
            [InputStyles.control]: true,
            [InputStyles.error]: isHasError
        })}>
            <div>
                {props.children}
            </div>
            { isHasError && <div className={InputStyles.errorText}>{ meta.error }</div> }
        </div>
    )
}

const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return <ControlWithValidationMessage {...props}> <input {...input} {...restProps} /> </ControlWithValidationMessage>
}

const Textarea = (props) => {
    const {input, meta, ...restProps} = props;
    return <ControlWithValidationMessage {...props}> <textarea {...input} {...restProps} /> </ControlWithValidationMessage>
}

export { Input, Textarea };