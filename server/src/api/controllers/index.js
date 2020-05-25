export const getSkills = async (req, res) => {
  const skills = await SkillService.getAll();
  res.json({result: skills});
};

export const getRequests = async (req, res) => {
  if(!req.body) {
    return res.status(500).json({error: 'No data sent.'});
  }
  const {skills} = req.body;
  if(!skills) {
    return res.status(500).json({error: 'No data sent.'});
  }
  const requests = await RequestService.getFiveRequestsFromSkillSet(skills);
  const message = requests.length < 5 ?
    'There are less than 5 requests for the selected skills.' :
    'Please pick the requests you\'d like to take and decline the rest.';
  res.json({
    result: requests,
    message
  });
};  
