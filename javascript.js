function get() {
    var values = {}
    values = {
        Id: GetRandom(),
        FName: myform.fname.value,
        LName: myform.lname.value,
        Gender: myform.gender.value,
        EMail: myform.Email.value,
        Password: myform.pswd.value,
        DateOfBirth: myform.dob.value,
        PhoneNumber: myform.phonenumber.value,
        Hobbies: getValue(),
        Address: myform.add.value,
        state: myform.state.value,
        district: myform.district.value,
        zip: myform.zip.value
    }
    const jasonvalues = JSON.stringify(values);
    document.getElementById("demo").innerHTML = jasonvalues;
    console.log(jasonvalues);
}
function getValue() {
    var checkboxes =
        document.getElementsByName('hobbies');
    var result = "";
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            result += checkboxes[i].value + ",";
        }
    }
    return result;
}
function GetRandom() {
    var myElement = document.getElementById("hide")
    myElement.value = Math.floor(Math.random() * 1001);
    return myElement.value;
}
function validate() {
    var fname = document.myform.fname;
    var lname = document.myform.lname;
    var Gender = document.myform.gender;
    var email = document.myform.Email;
    var password = document.myform.pswd;
    var dob = document.myform.dob;
    var phone = document.myform.phonenumber;
    var hobby = document.myform.hobbies;
    var address = document.myform.add;
    var state = document.myform.state;
    var district = document.myform.district;
    var zip = document.myform.zip;
    var terms = document.myform.terms;
    if (fname.value == "") {
        alert(" please Enter a first name");
        document.myForm.fname.focus();
        return false;
    }
    if (!/^[a-zA-Z" "]*$/g.test(fname.value)) {
        alert("Invalid characters");
        document.myForm.fname.focus();
        return false;
    }
    if (lname.value == "") {
        alert(" please Enter a last name");
        document.myForm.lname.focus();
        return false;
    }
    if (!/^[a-zA-Z" "]*$/g.test(lname.value)) {
        alert("Invalid characters");
        document.myForm.lname.focus();
        return false;
    }
    if (Gender.value.length <= 0) {
        alert("Gender is required");
        document.myForm.Gender.focus();
        return false;
    }
    if (!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/g.test(email.value)) {
        alert("Email is Invalid");
        document.myForm.email.focus();
        return false;
    }
    if (password.value.length < 6) {
        alert("Please make sure password is longer than 6 characters.")
        document.myForm.password.focus();
        return false;
    }
    if (dob.value.length <= 0) {
        alert("Date of Birth is required");
        document.myForm.dob.focus();
        return false;
    }
    if (phone.value.length <= 0) {
        alert("Phone Number is required");
        document.myForm.phone.focus();
        return false;
    }
    if (phone.value.length < 10 || phone.value.length > 10) {
        alert("Mobile No. is not valid, Please Enter 10 Digit Mobile No.");
        document.myForm.phone.focus();
        return false;
    }
    if (address.value.length <= 0) {
        alert("Address is required");
        document.myForm.address.focus();
        return false;
    }
    if (district.value == "") {
        alert("Enter a district");
        document.myForm.district.focus();
        return false;
    }
    if (!/^[a-zA-Z" "]*$/g.test(district.value)) {
        alert("Invalid characters");
        document.myForm.disstrict.focus();
        return false;
    }
    if (zip.value.length <= 0) {
        alert("zip code is required");
        document.myForm.zip.focus();
        return false;
    }
    if (!/^([0-8])+$/g.test(zip.value)) {
        alert(" zipNumber is Invalid");
        document.myForm.zip.focus();
        return false;
    }
    if (!myform.terms.checked) {
        alert("Please indicate that you accept the Terms and Conditions");
        document.myForm.terms.focus();
        return false;
    }

    return false;
}
function valid() {
    validate();
    get();
}
function mySubmitFunction(e) {
    e.preventDefault();
    return false;
}