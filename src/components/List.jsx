import { gql, useLazyQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";

//query para buscar los repositorios
const SEARCH_REPOSITORY = gql`
  query topRepos($query: String!) {
    search(first: 6, query: $query, type: REPOSITORY) {
      repositoryCount
      nodes {
        ... on Repository {
          nameWithOwner
          description
          issues(states: OPEN) {
            totalCount
          }
        }
      }
    }
  }
`;

const List = () => {
  // useLazyQuery para manejar cuadno hacer la consulta
  const [getSearchRepository, result] = useLazyQuery(SEARCH_REPOSITORY);
  const [query, setQuery] = useState(null);
  const [valueInput, setValueInput] = useState(null);
  console.log(query);
  console.log(valueInput);
  //manejador de click del search
  const handleSearch = (value) => {
    getSearchRepository({ variables: { query: value } });
  };

  // //manejador de cambio del input
  const handleValueInput = (e) => {
    setValueInput(e.target.value);
  };

  useEffect(() => {
    console.log("result del effect", result);
    if (result.data) {
      setQuery(result.data.search.nodes);
    }
  }, [result]);

  return (
    <div>
      <div className="bg-white p-8 rounded-md w-full h-screen">
        <div className=" flex items-center justify-between pb-6">
          <div>
            <h2 className="text-gray-600 font-semibold">
              Issues manager of the Github repository.
            </h2>
            <div className=" mt-4">
              <span className="text mt-3"></span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex bg-gray-50 items-center p-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                />
              </svg>
              <input
                className="bg-gray-50 outline-none ml-1 block "
                type="text"
                name=""
                id=""
                placeholder="search..."
                onChange={handleValueInput}
              ></input>
            </div>
            <div className="lg:ml-40 ml-10 space-x-8">
              <button
                className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer"
                onClick={() => {
                  handleSearch(valueInput);
                }}
              >
                Buscar
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Owner
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      description
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Issues Open
                    </th>

                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {query &&
                    query.map((repo) => (
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {repo.nameWithOwner}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {repo.description}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {repo.issues.totalCount}
                          </p>
                        </td>

                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <button className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
                            Buscar
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      )
    </div>
  );
};

export default List;
