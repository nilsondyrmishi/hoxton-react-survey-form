function RadioButtonsLogo(props) {
    return <ul>
        <li>
            <input id="logo1" type="radio" name="logo" value="1"
                   onChange={event => {
                       const updated = { ...props.formData, logo: event.target.value }
                       props.setFormData(updated)
                   }}
                   checked={props.formData.logo === '1'}
            /><label
            htmlFor="logo1"
        >1</label
        >
        </li>
        <li>
            <input id="logo2" type="radio" name="logo" value="2"
                   onChange={event => {
                       const updated = { ...props.formData, logo: event.target.value }
                       props.setFormData(updated)
                   }}
                   checked={props.formData.logo === '2'}
            /><label
            htmlFor="logo2"
        >2</label
        >
        </li>
        <li>
            <input id="logo3" type="radio" name="logo" value="3"
                   onChange={event => {
                       const updated = { ...props.formData, logo: event.target.value }
                       props.setFormData(updated)
                   }}
                   checked={props.formData.logo === '3'}
            /><label
            htmlFor="logo3"
        >3</label
        >
        </li>
        <li>
            <input id="logo4" type="radio" name="logo" value="4"
                   onChange={event => {
                       const updated = { ...props.formData, logo: event.target.value }
                       props.setFormData(updated)
                   }}
                   checked={props.formData.logo === '4'}
            /><label
            htmlFor="logo4"
        >4</label
        >
        </li>
    </ul>
}
export default RadioButtonsLogo
