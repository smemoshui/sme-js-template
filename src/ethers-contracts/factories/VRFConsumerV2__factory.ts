/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BytesLike,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { VRFConsumerV2, VRFConsumerV2Interface } from "../VRFConsumerV2";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint64",
        name: "subscriptionId",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "vrfCoordinator",
        type: "address",
      },
      {
        internalType: "address",
        name: "link",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "keyHash",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "have",
        type: "address",
      },
      {
        internalType: "address",
        name: "want",
        type: "address",
      },
    ],
    name: "OnlyCoordinatorCanFulfill",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256[]",
        name: "randomWords",
        type: "uint256[]",
      },
    ],
    name: "ReturnedRandomness",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "numerators",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "randomWords",
        type: "uint256[]",
      },
    ],
    name: "rawFulfillRandomWords",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "offerer",
                type: "address",
              },
              {
                internalType: "address",
                name: "zone",
                type: "address",
              },
              {
                components: [
                  {
                    internalType: "enum ItemType",
                    name: "itemType",
                    type: "uint8",
                  },
                  {
                    internalType: "address",
                    name: "token",
                    type: "address",
                  },
                  {
                    internalType: "uint256",
                    name: "identifierOrCriteria",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "startAmount",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "endAmount",
                    type: "uint256",
                  },
                ],
                internalType: "struct OfferItem[]",
                name: "offer",
                type: "tuple[]",
              },
              {
                components: [
                  {
                    internalType: "enum ItemType",
                    name: "itemType",
                    type: "uint8",
                  },
                  {
                    internalType: "address",
                    name: "token",
                    type: "address",
                  },
                  {
                    internalType: "uint256",
                    name: "identifierOrCriteria",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "startAmount",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "endAmount",
                    type: "uint256",
                  },
                  {
                    internalType: "address payable",
                    name: "recipient",
                    type: "address",
                  },
                ],
                internalType: "struct ConsiderationItem[]",
                name: "consideration",
                type: "tuple[]",
              },
              {
                internalType: "enum OrderType",
                name: "orderType",
                type: "uint8",
              },
              {
                internalType: "uint256",
                name: "startTime",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "endTime",
                type: "uint256",
              },
              {
                internalType: "bytes32",
                name: "zoneHash",
                type: "bytes32",
              },
              {
                internalType: "uint256",
                name: "salt",
                type: "uint256",
              },
              {
                internalType: "bytes32",
                name: "conduitKey",
                type: "bytes32",
              },
              {
                internalType: "uint256",
                name: "totalOriginalConsiderationItems",
                type: "uint256",
              },
            ],
            internalType: "struct OrderParameters",
            name: "parameters",
            type: "tuple",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct Order[]",
        name: "orders",
        type: "tuple[]",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "uint256",
                name: "orderIndex",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "itemIndex",
                type: "uint256",
              },
            ],
            internalType: "struct FulfillmentComponent[]",
            name: "offerComponents",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "orderIndex",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "itemIndex",
                type: "uint256",
              },
            ],
            internalType: "struct FulfillmentComponent[]",
            name: "considerationComponents",
            type: "tuple[]",
          },
        ],
        internalType: "struct Fulfillment[]",
        name: "fulfillments",
        type: "tuple[]",
      },
    ],
    name: "requestRandomWords",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "s_numWords",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "s_randomWords",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "s_requestId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6101e0604052622255106101405260036101605260026101805260646101a052620f42406101c0523480156200003457600080fd5b50604051620025b7380380620025b783398101604081905262000057916200053b565b6001600160a01b03808416608081905260a052821660c052610120819052600280546001600160a01b031916331790556001600160401b038416610100527345a7f5ff630d31eeb1e00dc24df2f23df1ba0a7c60e052620000b7620000c1565b505050506200059a565b60408051610c808101825260008152611394602082015261274291810191909152613b0a6060820152614eec60808201526162e860a082015261770060c0820152618b3260e0820152619f8161010082015261b3ec61012082015261c87461014082015261dd1961016082015261f1dc610180820152620106be6101a082015262011bbe6101c0820152620130dd6101e08201526201461c61020082015262015b7c610220820152620170fd610240820152620186a061026082015262019c646102808201526201b24c6102a08201526201c8576102c08201526201de876102e08201526201f4dc61030082015262020b56610320820152620221f7610340820152620238bf61036082015262024faf610380820152620266c96103a082015262027e0b6103c0820152620295796103e08201526202ad126104008201526202c4d86104208201526202dccc6104408201526202f4ee61046082015262030d3f610480820152620325c26104a082015262033e776104c08201526203575f6104e08201526203707b610500820152620389cd6105208201526203a3566105408201526203bd186105608201526203d7146105808201526203f14c6105a082015262040bc16105c0820152620426756105e08201526204416961060082015262045ca16106208201526204781d610640820152620493e06106608201526204afeb6106808201526204cc426106a08201526204e8e76106c0820152620505db6106e082015262052323610700820152620540c061072082015262055eb561074082015262057d0761076082015262059bb86107808201526205bacc6107a08201526205da466107c08201526205fa2b6107e082015262061a7f61080082015262063b4861082082015262065c8861084082015262067e476108608201526206a08a6108808201526206c3576108a08201526206e6b56108c082015262070aab6108e082015262072f416109008201526207548061092082015262077a726109408201526207a1206109608201526207c8966109808201526207f0e06109a082015262081a0e6109c08201526208442e6109e082015262086f52610a0082015262089b8e610a208201526208c8f7610a408201526208f7a9610a60820152620927c0610a808201526209595d610aa082015262098caa610ac08201526209c1d4610ae08201526209f915610b00820152620a32b1610b20820152620a6efc610b40820152620aae60610b60820152620af165610b80820152620b38c0610ba0820152620b856b610bc0820152620bd8c9610be0820152620c34ff610c00820152620c9daa610c20820152620d19d2610c40820152620dbb9f610c60820152620004ad906003906064620004b0565b50565b828054828255906000526020600020908101928215620004f5579160200282015b82811115620004f5578251829062ffffff16905591602001919060010190620004d1565b506200050392915062000507565b5090565b5b8082111562000503576000815560010162000508565b80516001600160a01b03811681146200053657600080fd5b919050565b600080600080608085870312156200055257600080fd5b84516001600160401b03811681146200056a57600080fd5b93506200057a602086016200051e565b92506200058a604086016200051e565b6060959095015193969295505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c051611f8c6200062b6000396000610b2701526000610ae001526000818160a401526102d501526000610281015260006102ad015260006102280152600061025701526000610a3601526000505060006102fc015260008181610135015261019d0152611f8c6000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c8063e89e106a11610050578063e89e106a146100e0578063f6eaffc8146100f7578063f86eb11f1461010a57600080fd5b80631fe543e3146100775780638ddb821d1461008c578063967dd7801461009f575b600080fd5b61008a610085366004610c9e565b61011d565b005b61008a61009a366004610d8c565b6101dc565b6100c67f000000000000000000000000000000000000000000000000000000000000000081565b60405163ffffffff90911681526020015b60405180910390f35b6100e960015481565b6040519081526020016100d7565b6100e9610105366004610df8565b610478565b6100e9610118366004610df8565b610499565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146101ce576040517f1cf993f400000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016602482015260440160405180910390fd5b6101d882826104a9565b5050565b60025473ffffffffffffffffffffffffffffffffffffffff16331461020057600080fd5b6040517f5d3b1d300000000000000000000000000000000000000000000000000000000081527f0000000000000000000000000000000000000000000000000000000000000000600482015267ffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016602482015261ffff7f000000000000000000000000000000000000000000000000000000000000000016604482015263ffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660648301527f00000000000000000000000000000000000000000000000000000000000000001660848201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690635d3b1d309060a4016020604051808303816000875af115801561035a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061037e9190610e11565b60018190556000908152600460205260408120905b848110156103f757818686838181106103ae576103ae610e2a565b90506020028101906103c09190610e59565b8154600181018355600092835260209092209091600c02016103e282826115a0565b505080806103ef90611728565b915050610393565b506001546000908152600560205260408120905b8381101561046f578185858381811061042657610426610e2a565b90506020028101906104389190610e59565b81546001810183556000928352602090922090916002020161045a82826118a1565b5050808061046790611728565b91505061040b565b50505050505050565b6000818154811061048857600080fd5b600091825260209091200154905081565b6003818154811061048857600080fd5b80516104bc906000906020840190610b50565b507fefb16d61046900da527008568620fb9f8420e2f5ed4de3bfbded5035c9362b0e816040516104ec91906119a3565b60405180910390a160008061051a8360008151811061050d5761050d610e2a565b6020026020010151610ad7565b9150915060608060046000878152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b828210156108ac5760008481526020808220604080516101a081018252600c8702909201805473ffffffffffffffffffffffffffffffffffffffff9081168484019081526001830154909116606085015260028201805484518188028101880190955280855294969295879592948794608088019491939284015b828210156106a2576000848152602090206040805160a08101909152600484029091018054829060ff16600581111561060a5761060a610f72565b600581111561061b5761061b610f72565b81526020016000820160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815260200160028201548152602001600382015481525050815260200190600101906105cf565b50505050815260200160038201805480602002602001604051908101604052809291908181526020016000905b8282101561079057838290600052602060002090600502016040518060c00160405290816000820160009054906101000a900460ff16600581111561071657610716610f72565b600581111561072757610727610f72565b8152815473ffffffffffffffffffffffffffffffffffffffff61010090910481166020808401919091526001808501546040850152600285015460608501526003850154608085015260049094015490911660a0909201919091529183529290920191016106cf565b5050509082525060048281015460209092019160ff16908111156107b6576107b6610f72565b60048111156107c7576107c7610f72565b81526020016005820154815260200160068201548152602001600782015481526020016008820154815260200160098201548152602001600a820154815250508152602001600b8201805461081b906113ec565b80601f0160208091040260200160405190810160405280929190818152602001828054610847906113ec565b80156108945780601f1061086957610100808354040283529160200191610894565b820191906000526020600020905b81548152906001019060200180831161087757829003601f168201915b50505050508152505081526020019060010190610554565b50505050915060056000878152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b828210156109f35760008481526020808220604080516002870290920180546060948102840185018352918301828152929490938593928592909185015b8282101561096957838290600052602060002090600202016040518060400160405290816000820154815260200160018201548152505081526020019060010190610923565b50505050815260200160018201805480602002602001604051908101604052809291908181526020016000905b828210156109dc57838290600052602060002090600202016040518060400160405290816000820154815260200160018201548152505081526020019060010190610996565b5050505081525050815260200190600101906108e5565b50506040517feb599d9c0000000000000000000000000000000000000000000000000000000081529293505073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169163eb599d9c9150610a72908590859089908990600401611c2b565b6000604051808303816000875af1158015610a91573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261046f9190810190611df6565b60008080610b057f000000000000000000000000000000000000000000000000000000000000000085611f1b565b905060038181548110610b1a57610b1a610e2a565b90600052602060002001547f00000000000000000000000000000000000000000000000000000000000000009250925050915091565b828054828255906000526020600020908101928215610b8b579160200282015b82811115610b8b578251825591602001919060010190610b70565b50610b97929150610b9b565b5090565b5b80821115610b975760008155600101610b9c565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715610c0257610c02610bb0565b60405290565b60405160a0810167ffffffffffffffff81118282101715610c0257610c02610bb0565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715610c7257610c72610bb0565b604052919050565b600067ffffffffffffffff821115610c9457610c94610bb0565b5060051b60200190565b60008060408385031215610cb157600080fd5b8235915060208084013567ffffffffffffffff811115610cd057600080fd5b8401601f81018613610ce157600080fd5b8035610cf4610cef82610c7a565b610c2b565b81815260059190911b82018301908381019088831115610d1357600080fd5b928401925b82841015610d3157833582529284019290840190610d18565b80955050505050509250929050565b60008083601f840112610d5257600080fd5b50813567ffffffffffffffff811115610d6a57600080fd5b6020830191508360208260051b8501011115610d8557600080fd5b9250929050565b60008060008060408587031215610da257600080fd5b843567ffffffffffffffff80821115610dba57600080fd5b610dc688838901610d40565b90965094506020870135915080821115610ddf57600080fd5b50610dec87828801610d40565b95989497509550505050565b600060208284031215610e0a57600080fd5b5035919050565b600060208284031215610e2357600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc1833603018112610e8d57600080fd5b9190910192915050565b73ffffffffffffffffffffffffffffffffffffffff81168114610eb957600080fd5b50565b60008135610ec981610e97565b92915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112610f0457600080fd5b83018035915067ffffffffffffffff821115610f1f57600080fd5b602001915060a081023603821315610d8557600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60068110610eb957600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60068210610fb157610fb1610f72565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0081541660ff831681178255505050565b8135610fed81610f65565b610ff78183610fa1565b50602082013561100681610e97565b81547fffffffffffffffffffffff0000000000000000000000000000000000000000ff16600882901b74ffffffffffffffffffffffffffffffffffffffff0016178255506040820135600182015560608201356002820155608082013560038201555050565b6801000000000000000083111561108557611085610bb0565b8054838255808410156111185760027f3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff80831683146110c6576110c6610f36565b80861686146110d7576110d7610f36565b5060008381526020812086831b81019084841b015b808210156111135782825582600183015582848301558260038301556004820191506110ec565b505050505b5060008181526020812083915b8581101561114d576111378383610fe2565b60a0929092019160049190910190600101611125565b505050505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261118a57600080fd5b83018035915067ffffffffffffffff8211156111a557600080fd5b602001915060c081023603821315610d8557600080fd5b81356111c781610f65565b6111d18183610fa1565b5060208201356111e081610e97565b81547fffffffffffffffffffffff0000000000000000000000000000000000000000ff16600882901b74ffffffffffffffffffffffffffffffffffffffff00161782555060408201356001820155606082013560028201556080820135600382015560a082013561125081610e97565b6004820180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8316179055505050565b505050565b680100000000000000008311156112b5576112b5610bb0565b80548382558084101561133157600581810281810483146112d8576112d8610f36565b85820282810487146112ec576112ec610f36565b6000858152602081209283019291909101905b8282101561132c5780825580600183015580600283015580600383015580600483015583820191506112ff565b505050505b5060008181526020812083915b8581101561114d5761135083836111bc565b60c092909201916005919091019060010161133e565b6000813560058110610ec957600080fd5b60058210610fb157610fb1610f72565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126113bc57600080fd5b83018035915067ffffffffffffffff8211156113d757600080fd5b602001915036819003821315610d8557600080fd5b600181811c9082168061140057607f821691505b602082108103611439577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b601f82111561129757600081815260208120601f850160051c810160208610156114665750805b601f850160051c820191505b8181101561114d57828155600101611472565b67ffffffffffffffff83111561149d5761149d610bb0565b6114b1836114ab83546113ec565b8361143f565b6000601f84116001811461150357600085156114cd5750838201355b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600387901b1c1916600186901b178355611599565b6000838152602090207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0861690835b828110156115525786850135825560209485019460019092019101611532565b508682101561158d577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88860031b161c19848701351681555b505060018560011b0183555b5050505050565b81357ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffea18336030181126115d257600080fd5b82016116226115e082610ebc565b83547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff91909116178355565b61167761163160208301610ebc565b6001840173ffffffffffffffffffffffffffffffffffffffff82167fffffffffffffffffffffffff00000000000000000000000000000000000000008254161781555050565b6116846040820182610ecf565b61169281836002870161106c565b50506116a16060820182611155565b6116af81836003870161129c565b50506116c96116c060808301611366565b60048401611377565b60a0810135600583015560c0810135600683015560e08101356007830155610100810135600883015561012081013560098301556101400135600a8201556117146020830183611387565b6117228183600b8601611485565b50505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361175957611759610f36565b5060010190565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261179557600080fd5b83018035915067ffffffffffffffff8211156117b057600080fd5b6020019150600681901b3603821315610d8557600080fd5b680100000000000000008311156117e1576117e1610bb0565b8054838255808410156118685760017f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff808316831461182257611822610f36565b808616861461183357611833610f36565b5060008381526020812086831b81019084841b015b80821015611863578282558284830155600282019150611848565b505050505b5060008181526020812083915b8581101561114d5782358255602083013560018301556040929092019160029190910190600101611875565b6118ab8283611760565b680100000000000000008111156118c4576118c4610bb0565b82548184558082101561194b5760017f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff808316831461190557611905610f36565b808416841461191657611916610f36565b5060008581526020812084831b81019084841b015b8082101561194657828255828483015560028201915061192b565b505050505b5060008381526020902060005b828110156119845783358255602084013560018301556040939093019260029190910190600101611958565b505050506119956020830183611760565b6117228183600186016117c8565b6020808252825182820181905260009190848201906040850190845b818110156119db578351835292840192918401916001016119bf565b50909695505050505050565b600681106119f7576119f7610f72565b9052565b600081518084526020808501945080840160005b83811015611a72578151611a248882516119e7565b8084015173ffffffffffffffffffffffffffffffffffffffff168885015260408082015190890152606080820151908901526080908101519088015260a09096019590820190600101611a0f565b509495945050505050565b600081518084526020808501945080840160005b83811015611a72578151611aa68882516119e7565b8084015173ffffffffffffffffffffffffffffffffffffffff90811689860152604080830151908a0152606080830151908a0152608080830151908a015260a091820151169088015260c09096019590820190600101611a91565b600581106119f7576119f7610f72565b6000815180845260005b81811015611b3757602081850181015186830182015201611b1b565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b600081518084526020808501945080840160005b83811015611a72578151805188528301518388015260409096019590820190600101611b89565b600081518084526020808501808196508360051b8101915082860160005b85811015611c1e578284038952815160408151818752611bf082880182611b75565b91505086820151915085810387870152611c0a8183611b75565b9a87019a9550505090840190600101611bce565b5091979650505050505050565b6000608080830181845280885180835260a092508286019150828160051b8701016020808c0160005b84811015611db7577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff608a8503018652815160408151818752611cae828801825173ffffffffffffffffffffffffffffffffffffffff169052565b858101516060611cd5818a018373ffffffffffffffffffffffffffffffffffffffff169052565b8383015193506101609150818d8a0152611cf36101a08a01856119fb565b908301518982037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc0018d8b0152909350611d2d8482611a7d565b9350508b82015160c0611d42818b0183611b01565b838d015160e08b81019190915290840151610100808c019190915290840151610120808c019190915290840151610140808c019190915290840151928a0192909252500151610180870152908401518582038587015290611da38183611b11565b978501979550505090820190600101611c54565b505087820390880152611dca818b611bb0565b9550505050505083604083015282606083015295945050505050565b8051611df181610e97565b919050565b60006020808385031215611e0957600080fd5b825167ffffffffffffffff811115611e2057600080fd5b8301601f81018513611e3157600080fd5b8051611e3f610cef82610c7a565b81815260e09182028301840191848201919088841115611e5e57600080fd5b938501935b83851015611f0f5784890381811215611e7c5760008081fd5b611e84610bdf565b60a080831215611e945760008081fd5b611e9c610c08565b92508751611ea981610f65565b835287890151611eb881610e97565b838a0152604088810151818501526060808a0151908501526080808a0151611edf81610e97565b90850152838352611ef1898301611de6565b838b015260c089015190830152508452509384019391850191611e63565b50979650505050505050565b600082611f51577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b50069056fea2646970667358221220bcf0e0c2b30ebcee54cecb1706aeacf9de659febdffcbfe7973f244e4179092164736f6c63430008140033";

type VRFConsumerV2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VRFConsumerV2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VRFConsumerV2__factory extends ContractFactory {
  constructor(...args: VRFConsumerV2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    subscriptionId: BigNumberish,
    vrfCoordinator: string,
    link: string,
    keyHash: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<VRFConsumerV2> {
    return super.deploy(
      subscriptionId,
      vrfCoordinator,
      link,
      keyHash,
      overrides || {}
    ) as Promise<VRFConsumerV2>;
  }
  override getDeployTransaction(
    subscriptionId: BigNumberish,
    vrfCoordinator: string,
    link: string,
    keyHash: BytesLike,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(
      subscriptionId,
      vrfCoordinator,
      link,
      keyHash,
      overrides || {}
    );
  }
  override attach(address: string): VRFConsumerV2 {
    return super.attach(address) as VRFConsumerV2;
  }
  override connect(signer: Signer): VRFConsumerV2__factory {
    return super.connect(signer) as VRFConsumerV2__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VRFConsumerV2Interface {
    return new utils.Interface(_abi) as VRFConsumerV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VRFConsumerV2 {
    return new Contract(address, _abi, signerOrProvider) as VRFConsumerV2;
  }
}
