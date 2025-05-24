export default function LoadingSkeleton({ length = 4 }) {
  return (
    <>
      {Array.from({ length }).map((_, index) => (
        <tr key={index} className="border-b border-gray-200 w-full">
          {Array.from({ length }).map((_, index) => (
            <td key={index} className="p-4">
              <div className="h-4 w-full bg-gray-300 rounded animate-pulse"></div>
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}
