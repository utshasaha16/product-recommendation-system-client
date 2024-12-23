import React from "react";

const Register = () => {
    

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = {name, photoUrl, email, password}
        console.log(user);
    }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
            vitae quisquam laborum nobis, suscipit quibusdam fuga voluptatem
            corrupti vero voluptas qui mollitia harum. Perferendis, nihil
            corporis. Hic, quia consequuntur. Suscipit.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-sm rounded-none">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                name="photoURL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
