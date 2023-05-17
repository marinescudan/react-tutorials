
export const useInit = (callback, ...args) => {
   const [mounted, setMounted] = useState(false)

   const resetInit = () => setMounted(false)

   useEffect(() => {
      if(!mounted) {
         setMounted(true);
         callback(...args);
      }
   },[mounted, callback]);

   return [resetInit]
}

// Usage:
// Component.js
//   import { useInit } from 'hooks/useInit'
//
//   const Component = ({ fetchBusiness, arg1, arg2, requiresRefetch }) => {
//     const [resetInit] = useInit(fetchBusiness, arg1, arg2)
//     useEffect(() => {
//       resetInit()
//     }, [requiresRefetch, resetInit]);
//   }
//
//   export default Component
//
// ComponentContainer.js
//   import { useInit } from 'hooks/useInit'
//
//   const mapStateToProps = (state) => ({
//     arg1: state.arg1,
//     arg2: state.arg2,
//     requiresRefetch: state.requiresRefetch
//   })
//
//   const mapDispatchToProps = (dispatch) => ({
//     fetchBusiness: (arg1, arg2) => dispatch(fetchBusiness(arg1, arg2))
//   })
//

//   return ({ fetchBusiness, arg1, arg2, requiresRefetch }) => {
//     const [resetInit] = useInit(fetchBusiness, arg1, arg2)
//     useEffect(() => {
//       resetInit()
//     }, [requiresRefetch, resetInit]);
//   }
//
//   export default connect(mapStateToProps, mapDispatchToProps)(Component)
