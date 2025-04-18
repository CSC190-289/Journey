import { RA } from "@/styles"
import { Box, Card, CardContent, Stack, Typography } from "@mui/material"
import React from "react"

function Features(props: { ref?: React.Ref<unknown> }) {
  return (
    <Box textAlign={"center"} ref={props.ref}>
      <RA.Zoom triggerOnce>
        <Typography variant='h5' fontWeight={700} mb={2}>
          Features
        </Typography>
      </RA.Zoom>
      <Stack spacing={4}>
        <Card>
          <CardContent>
            <RA.Zoom triggerOnce>
              <Typography fontWeight={700}>Logged Journal Entry:</Typography>
              <Typography>
                Save all your logged entries, with easy access to previously
                written works!
              </Typography>
            </RA.Zoom>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <RA.Zoom triggerOnce>
              <Typography fontWeight={700}>AI Analysis:</Typography>
              <Typography>
                Have your moods recorded through journal entires and analyzed
                with a AI's Natural Process Language's model to easily get
                insight with your emotions.
              </Typography>
            </RA.Zoom>
          </CardContent>
          {/* </Card>
        <Card>
          <CardContent>
            <RA.Zoom triggerOnce>
              <Typography fontWeight={700}>Host Dashboard:</Typography>
              <Typography>
                During polling Hosts have access to a dashboard which allows
                them to monitor a participant's data in real time. Allowing for
                Hosts to give feedback based on participant results and obtain{" "}
                <br></br>
                insight on participants understanding of the material.
              </Typography>
            </RA.Zoom>
          </CardContent>
        </Card>
        <Card> */}
          {/* <CardContent>
            <RA.Zoom triggerOnce>
              <Typography fontWeight={700}>Web Access & UI:</Typography>
              <Typography>
                PulseCheck is a web application that works on Desktop, Tablets,
                and Mobile Devices that support modern web browsers. Built using
                Firebase, React, and Material UI in order to ensure both a fast
                and optimal user experience.
              </Typography>
            </RA.Zoom>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <RA.Zoom triggerOnce>
              <Typography fontWeight={700}>Attendance Tracking:</Typography>
              <Typography>
                User participation can serve as a check for who is in
                attendance. Non-participating users are flagged for review and
                can be removed from a poll at the Hosts discretion.
              </Typography>
            </RA.Zoom>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <RA.Zoom triggerOnce>
              <Typography fontWeight={700}>
                Question Banking & Randomization:
              </Typography>
              <Typography>
                Hosts can create question banks to be able to reuse <br></br>
                questions on future sessions. The order of questions can also be{" "}
                <br></br>
                randomized to prevent the sharing of answers between
                participants should the host choose.
              </Typography>
            </RA.Zoom>
          </CardContent> */}
        </Card>
      </Stack>
    </Box>
  )
}

export default Features
