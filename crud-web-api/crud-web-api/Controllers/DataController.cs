using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Core;

namespace crud_web_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DataController : ControllerBase
    {
        public DataController() { }

        [HttpGet]
        public Task<IActionResult> GetData()
        {
            return new Task<IActionResult>(null);
        }

        [HttpPost]
        public IActionResult PostData()
        {
            return Ok();
        }

        [HttpPut]
        public IActionResult PutData()
        {
            return Ok();
        }

        [HttpDelete]
        public IActionResult DeleteData()
        {
            return Ok();
        }
    }
}
