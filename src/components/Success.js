import React, { Fragment } from "react"
import Typography from "@material-ui/core/Typography"

const Success = () => {
  return (
    <Fragment>
      <Typography variant="h3" align="center">
        Results
      </Typography>
      <Typography variant="h4" align="center">
        If you score: 
        </Typography><br/>
      <Typography variant="h6"  align="center">
      20-25 - You most likely are suffering from cabin fever. Take a break and call a friend ☎️
      </Typography><br/>
      <Typography variant="h6"  align="center">
      15-19 - You are exhibiting some cabin fever symptoms. Take a break and do something you enjoy 🙂
      </Typography><br/>
      <Typography variant="h6"  align="center">
      10-14 - You are exhibiting a couple of cabin fever symptoms. Keep monitoring your health everyday 📝
      </Typography><br/>
      <Typography variant="h6"  align="center">
      5-9 - You most likely are NOT suffering from cabin fever. Keep doing what you're doing 👍
      </Typography>
      
    </Fragment>
  )
}

export default Success