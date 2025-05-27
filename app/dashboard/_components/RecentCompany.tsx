import { companies } from "@/app/data/dashboard";

const RecentCompany = () => {
  return (
    <div className="bg-white rounded-xl px-4 md:px-7 py-8 font-bricolage">
      <h2 className="text-neutrals900 text-sm sm:text-base md:text-lg xl:text-xl font-semibold">
        Recent added company
      </h2>

      <div className="w-full overflow-x-auto border border-neutrals400 rounded-xl mt-8">
        <table className="w-full min-w-max">
          <thead className="text-neutrals800 text-sm gilroy rounded-t-lg font-semibold">
            <td className="p-4 rounded-tl-xl">Driver assigned</td>
            <td className="p-4">Registration date</td>
            <td className="p-4">Subscrption plan</td>
          </thead>
          <tbody>
            {companies.slice(0, 4).map((item, index) => (
              <tr
                key={index}
                className="w-full font-medium text-neutrals700 text-xs md:text-sm border-t border-neutrals400"
              >
                <td className="p-4">
                  <div className="flex justify-start items-center gap-2 flex-nowrap">
                    {/* <img
                        src={item.avatar}
                        alt={item.customer_name}
                        className="rounded-full"
                      /> */}
                    <p>{item.name}</p>
                  </div>
                </td>
                <td className="p-4">Jan, 2025 - 01 - 31</td>
                <td className="p-4 capitalize">{item.subscription} plan</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentCompany;
