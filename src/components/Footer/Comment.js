function Comment(props){
return(<label
>What else have you got to say about your rubber duck?
    <textarea
        onChange={event => {
            const updated = { ...props.formData, review: event.target.value }
            props.setFormData(updated)
        }}
        value={props.formData.review}
        name="review"
        cols={40}
        rows={10}
    >.</textarea></label >)
}
export default Comment
