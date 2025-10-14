// GET /api/user/
export const getUserData = async () => {
    try {
        const role = req.user.role;
        const recentSearchedCities = req.user.recentSearchedCities;
        res.json(
            { success: true, role, recentSearchedCities }
        )
    } catch (error) {
        res.json({ error: error.message, success: false });

    }
}

//store Usre Recent Search Cities
export const storeUserRecentSearchCities = async () => {
    try {
        const {recentSearchedCities} = req.body;
        const user = await req.user;
        if(user.recentSearchedCities.length <3){
            user.recentSearchedCities.push(recentSearchedCities);
        }else{
            user.recentSearchedCities.shift();
            user.recentSearchedCities.push(recentSearchedCities);
        }
        
        await user.save();
        res.json({ success: true, message:"City Added !!" });
    } catch (error) {
        res.json({ error: error.message, success: false });

    }
}