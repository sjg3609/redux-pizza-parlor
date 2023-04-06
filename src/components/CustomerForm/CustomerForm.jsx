function CustomerForm() {

    return (
        <div>
            <h2>Step 2: Customer Information</h2>
            <form>
                <input type="text" value="Name"/>
                <input type="text" value="Street Address"/>
                <input type="text" value="City" />
                <input type="text" value="Zip Code"/>
            </form>
            <button onClick="">Next</button>
        </div>
    )
}

export default CustomerForm;