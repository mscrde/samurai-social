import InputStyles from './Input.module.scss';

const ControlWithValidationMessage = ({meta, ...props}) => (
    <div className={`${InputStyles.control} ${meta.touched && !!meta.error ? InputStyles.error : ''}`}>
        <div>
            {props.children}
        </div>
        { meta.touched && meta.error && <div className={InputStyles.errorText}>{ meta.error }</div> }
    </div>
)

const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return <ControlWithValidationMessage {...props}> <input {...input} {...restProps} /> </ControlWithValidationMessage>
}

const Textarea = (props) => {
    const {input, meta, ...restProps} = props;
    return <ControlWithValidationMessage {...props}> <textarea {...input} {...restProps} /> </ControlWithValidationMessage>
}

export { Input, Textarea };