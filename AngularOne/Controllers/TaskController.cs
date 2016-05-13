using AngularOne.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace AngularOne.Controllers
{
    public class TaskController : ApiController
    {
        private List<Task> tasks;
        public TaskController()
        {
            InitializeTasks();
        }

        public HttpResponseMessage Get(string id = "")
        {
            if (!String.IsNullOrEmpty(id))
            {
                return Request.CreateResponse(HttpStatusCode.OK, tasks.SingleOrDefault(t => t.Id == id));
            }

            return  Request.CreateResponse(HttpStatusCode.OK, tasks);            
        }       

        public HttpResponseMessage Post(Task task)
        {
            tasks.Add(task);

            UpdateTaskSession(tasks);

            return Request.CreateResponse(HttpStatusCode.Created, tasks);
        }

        public HttpResponseMessage Put(Task task)
        {
            var taskItem = tasks.SingleOrDefault(t => t.Id == task.Id);
            taskItem.ProjectName = task.ProjectName;
            taskItem.TaskName = task.TaskName;
            taskItem.Notes = task.Notes;
            taskItem.Status = task.Status;

            UpdateTaskSession(tasks);

            return Request.CreateResponse(HttpStatusCode.OK);
        }

        [HttpDelete]
        public HttpResponseMessage Delete(string id)
        {
            var taskItem = tasks.SingleOrDefault(t => t.Id == id);

            tasks.Remove(taskItem);

            UpdateTaskSession(tasks);

            return Request.CreateResponse(HttpStatusCode.OK);
        }

        private void InitializeTasks()
        {
            if (HttpContext.Current.Session["tasks"] == null)
            {
                tasks = new List<Task>()
                {
                    new Task { Id = "T0001", ProjectName = "ABC Website Rebranding", TaskName = "Kick-off Workshop", Status = "Completed" },
                    new Task { Id = "T0002", ProjectName = "ABC Website Rebranding", TaskName = "Performance Tuning", Status = "In Progress" },
                    new Task { Id = "T0003", ProjectName = "Ecommerce Website", TaskName = "Browser Compatibility Testing", Status = "In Progress" },
                    new Task { Id = "T0004", ProjectName = "Ecommerce Website", TaskName = "Requirements Gathering", Status = "In Progress" }
                };

                HttpContext.Current.Session["tasks"] = tasks;
            }
            else
            {
                tasks = (List<Task>)HttpContext.Current.Session["tasks"];
            }
        }

        private void UpdateTaskSession(List<Task> tasks)
        {
            HttpContext.Current.Session["tasks"] = tasks;
        }
    }
}
