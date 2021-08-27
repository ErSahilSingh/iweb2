import React from 'react'

function Form() {
    return (
        <>
          <form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Name*</label>
    <input type="email" class="form-control" placeholder="First Name" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">*</label>
    <input type="password" class="form-control" placeholder="Last name Name"  id="inputPassword4"/>
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Inquiry*</label>
    <select id="inputState" class="form-select">
      <option selected>Collab/Client</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Email*</label>
    <input type="password" class="form-control" placeholder="singhforever@gmail.com"  id="inputPassword4"/>
  </div>
  
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message*</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Hello...." rows="3"></textarea>
</div>
  <div class="col-12">
    <button type="submit" class="btn btn-outline-secondary">Send</button>
  </div>
</form>  
        </>
    )
}

export default Form;
