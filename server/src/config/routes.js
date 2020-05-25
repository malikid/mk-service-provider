const routes = {
  "GET /skills": {
    controller: "index",
    action: "getSkills"
  },
  "POST /requests": {
    controller: "index",
    action: "getRequests"
  },
  "/:controller/:action/:id?": {}
};

export default routes;
