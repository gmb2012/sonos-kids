export default function SpeakergroupId({ speakergroupId }) {
    return <div>new show artists {speakergroupId} </div>
}

export async function getServerSideProps(context) {
    console.log();
    return { props: { speakergroupId: context.params.speakergroupId } }
}