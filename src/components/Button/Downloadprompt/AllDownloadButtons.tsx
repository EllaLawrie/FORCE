import React from 'react'
import SingleDownloadButton from './SingleDownloadButton'
import Downloadpromptlist from './Downloadpromptlist.json'

type Prop = { flexRow?: boolean }

const AllDownloadButtons = ({ flexRow }: Prop) => {
  return (
    <div
      className={`flex flex-col lg:flex-row
      } gap-y-6 gap-x-[1.5rem]`}
    >
      {Downloadpromptlist.DownloadPromptList.map((DownloadPromptList) => (
        <SingleDownloadButton
          key={DownloadPromptList.image}
          imageURL={DownloadPromptList.image}
          paragraph={DownloadPromptList.text}
        />
      ))}
    </div>
  )
}

export default AllDownloadButtons
