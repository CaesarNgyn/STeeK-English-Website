import './Course.scss'


const Course = () => {
  return (
    <div className='admin-course'>
      <h3>POST Course</h3>

      <form method="POST" action="/courses/store" >
        <div class="form-group">
          <label for="name" >Name Course</label>
          <input type="text" class="form-control" id="name" name="name" required placeholder='IEEE' />
        </div>
        <div class="form-group">
          <label for="description" >Description</label>
          <input type="text" class="form-control" id="description" name="description" />
        </div>
        <div class="form-group">
          <label for="price" >Price</label>
          <input type="text" class="form-control" id="price" name="price" required placeholder='100' />
        </div>
        <div class="form-group">
          <label for="vidID" >VideoID</label>
          <input type="text" class="form-control" id="vidID" name="vidID" placeholder='fdgaht4 ,abcde' />
        </div>
        <br />
        <div className="post-course-btn">
          <button type="submit" class="btn btn-primary" >POST</button>
        </div>
      </form>
    </div>
  )
}

export default Course;
