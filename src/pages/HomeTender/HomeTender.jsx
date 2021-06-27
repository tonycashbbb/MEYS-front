import React, {useEffect, useState} from 'react'
import s from './HomeTender.module.css'
import Spinner from "../../components/ui/Spinner/Spinner";
import Tender from "../../components/Tender/Tender";
import Button from "../../components/ui/Button/Button";
import ReplyToTender from "../../components/ReplyToTender/ReplyToTender";
import {getAllTenderRequestsAPI} from "../../services/accountPage-services";

const HomeTender = ({
                      homeTender,
                      getUser,
                      contractor,
                      userId,
                      replyOnTender
                    }) => {
  const [isReplying, setIsReplying] = useState(false)
  const [canReply, setCanReply] = useState(true)
  const [isAccepted, setIsAccepted] = useState(false)

  useEffect(() => {
    if (homeTender) {
      getUser(homeTender.contractorId)
    }
  }, [homeTender, getUser])

  useEffect(() => {
    const fetchData = async () => {
      if (homeTender) {
        const allReplies = await getAllTenderRequestsAPI()
        const bufArr = allReplies.filter(reply => reply.tenderId === homeTender.id && reply.userId === userId)

        if (bufArr.length === 0) {
          setCanReply(true)
        } else {
          allReplies.forEach(reply => {
            if (reply.status === "ACCEPTED") {
              setIsAccepted(true)
            }
          })
          setCanReply(false)
        }
      }
    }
    fetchData()
  }, [userId, homeTender])

  const changeIsReplying = () => {
    setIsReplying(!isReplying)
  }

  const onSubmitReply = (replyData) => {
    replyOnTender(userId, homeTender.id, replyData.replyText)
    setIsReplying(false)
  }

  if (!homeTender || !contractor) {
    return <Spinner/>
  }

  return (
    <div className="container">
      <Tender tenderName={homeTender.name}
              status={homeTender.status}
              budget={homeTender.budget}
              createdDate={homeTender.createdDate}
              yyyy_mm_dd={homeTender.createdDate.slice(0, 10)}
              time={homeTender.createdDate.slice(11, 16)}
              description={homeTender.description}
              contractorName={contractor.name}
              companyName={contractor.companyName}
              industry={contractor.industry}
              city={contractor.city}/>

      {canReply && !isReplying && <Button onClick={changeIsReplying}>Reply</Button>}
      {canReply && isReplying && <ReplyToTender onSubmitReply={onSubmitReply}
                                                cancel={changeIsReplying}/>}
      {!canReply && <div className={s.replied}>
        {!isAccepted && <Button btnHover={"#CB9AE1"}>Replied</Button>}
        {isAccepted && <Button btnColor={"#6498E1"}
                               btnHover={"#6498E1"}>Accepted</Button>}
      </div>}
    </div>
  )
}

export default HomeTender
