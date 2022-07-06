        try{
            let tempList = []
            const {ethereum} = window;
            const contractAddress = "0x5c6eC2Ccc4e8f338FCC04Af56F79BF404B168230"
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const contractABI = abi.abi;
            const dePayContract = new ethers.Contract(contractAddress, contractABI, signer);
            const listLength = dePayContract.arrayCounter();
            let values = await dePayContract.getTransaction(0);
            console.log(values)
            //return createData(values[0], values[1], values[2]);
        } catch(err){
            console.log("Problem");
        }

        <Button variant="contained" startIcon={<Paid/>} onClick={getData}> PYUH </Button>
        <Stack direction="column" spacing={2} alignItems="center" overflow="auto">
                <Typography variant="h1" align="center" color="white" fontSize={50} fontWeight="bold" paddingTop={10}> Current Price Feed </Typography>
                <PriceCards BTCPrice={BTCPrice} ETHPrice={ETHPrice} LINKPrice={LINKPrice} SNXPrice={SNXPrice}></PriceCards>
        </Stack>
        