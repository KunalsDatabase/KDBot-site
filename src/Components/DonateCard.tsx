import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
function  DonateCard(){
 return (
	<div className= "col px-lg-1">
		<div className="card text-light text-center bg-dark">
			<div className="card-header">Help Support KDBot</div>
			<div className="card-body">
				<div className="card-text">
					<PayPalScriptProvider options={{ clientId: "AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R" }}>
						<PayPalButtons
							createOrder={(data, actions) => {
								return actions.order.create({
									purchase_units: [
										{
											amount: {
												value: "10.00",
											},
										},
									],
								})
							}}
							onApprove={(data, actions) => {
								return actions!.order!.capture().then((details) => {
									const name = details!.payer!.name!.given_name
									alert(`Thank you ${name}!`)
								})
							}}
						/>
					</PayPalScriptProvider>
				</div>
			</div>
		</div>
	</div>
)}
export default DonateCard