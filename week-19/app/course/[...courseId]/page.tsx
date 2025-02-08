export default function Page ({params}) {
    console.log(JSON.stringify(params.courseId));
    
  return <div>Hello: {JSON.stringify(params.courseId)}</div>;
}
