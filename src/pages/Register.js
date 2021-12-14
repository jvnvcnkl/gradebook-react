
export default function Register() {


    return (
        <div>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">First name</label>
                    <input type="text" class="form-control" value={ } placeholder="Enter your first name" />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Last name</label>
                    <input type="text" class="form-control" value={ } placeholder="Enter last name" />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" value={ } placeholder="Enter email" />
                </div>

                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" value={ } placeholder="Password" />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Confirm Password</label>
                    <input type="password" class="form-control" value={ } placeholder="Confirm your password" />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Image url</label>
                    <input type="email" class="form-control" value={ } placeholder="Enter image url" />
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">I accept terms and condtions</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}