import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity, Text, TextInput, Switch, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Title from '@/components/Title';
import Categories from '@/components/CategoriesPub';
import Photos from '@/components/Photos';
import Description from '@/components/Description';
import WorkingRightsExperience from '@/components/WorkingRightsExperience';
import Accomodation from '@/components/Accomodation';
import YourDetails from '@/components/YourDetails';
import ContractType from '@/components/ContractType'; // Import du composant ContractType
import ContactOptions from '@/components/ContactOptions'; // Import du composant ContactOptions
import ContractSection from '@/components/ContractSection'; // Import du composant ContractSection
import NotationSection from '@/components/NotationSection'; // Import du composant NotationSection
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker'; // Pour Expo, assurez-vous d'installer cette bibliothèque
import ContactsOptions from '@/components/ContactsOptions';

export default function Publish() {
    const [title, setTitle] = useState(''); // État pour stocker le titre
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedPhotos, setSelectedPhotos] = useState([]); 
    const [description, setDescription] = useState('');
    const [workingRights, setWorkingRights] = useState([]);
    const [accommodationOptions, setAccommodationOptions] = useState([]);
    const [contactName, setContactName] = useState('');
    const [location, setLocation] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [cdi, setCdi] = useState(false);
    const [cdd, setCdd] = useState(false);
    const [alternance, setAlternance] = useState(false);
    const [freelance, setFreelance] = useState(false);
    const [isHourly, setIsHourly] = useState(false);
    const [isMonthly, setIsMonthly] = useState(false);
    const [hourlyRate, setHourlyRate] = useState('');
    const [monthlyRate, setMonthlyRate] = useState('');
    const [gojobsMessaging, setGojobsMessaging] = useState(false);
    const [call, setCall] = useState(false);
    const [apply, setApply] = useState(false);
    const [websiteRedirect, setWebsiteRedirect] = useState(false);
    const [phoneNumbers, setPhoneNumbers] = useState('');
    const [customQuestion1, setCustomQuestion1] = useState('');
    const [customQuestion2, setCustomQuestion2] = useState('');
    const [contractImages, setContractImages] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null); // État pour la sélection
    const [total, setTotal] = useState(0);

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [autoRenew, setAutoRenew] = useState(false);
    const [promoCode, setPromoCode] = useState('');
    const [totals, setTotals] = useState(0);

    const showDatePicker = (setter) => {
        DateTimePickerAndroid.open({
            value: new Date(),
            onChange: (_, selectedDate) => {
                if (selectedDate) {
                    setter(selectedDate);
                }
            },
            mode: 'date',
            is24Hour: true,
        });
    };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back-outline" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Ad Job</Text>
        <View style={{ width: 24 }} />
      </View>

      <Title title={title} setTitle={setTitle} />
      <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <Photos selectedPhotos={selectedPhotos} setSelectedPhotos={setSelectedPhotos} />
      <Description description={description} setDescription={setDescription} />
      <WorkingRightsExperience
        selectedOptions={workingRights}
        setSelectedOptions={setWorkingRights}
      />
       <Accomodation selectedOptions={accommodationOptions} setSelectedOptions={setAccommodationOptions} />
       <YourDetails
        contactName={contactName}
        setContactName={setContactName}
        location={location}
        setLocation={setLocation}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
      />
      <ContractType
        cdi={cdi} setCdi={setCdi}
        cdd={cdd} setCdd={setCdd}
        alternance={alternance} setAlternance={setAlternance}
        freelance={freelance} setFreelance={setFreelance}
        isHourly={isHourly} setIsHourly={setIsHourly}
        isMonthly={isMonthly} setIsMonthly={setIsMonthly}
        hourlyRate={hourlyRate} setHourlyRate={setHourlyRate}
        monthlyRate={monthlyRate} setMonthlyRate={setMonthlyRate}
      />
      <ContactOptions
        gojobsMessaging={gojobsMessaging}
        setGojobsMessaging={setGojobsMessaging}
        call={call}
        setCall={setCall}
        apply={apply}
        setApply={setApply}
        websiteRedirect={websiteRedirect}
        setWebsiteRedirect={setWebsiteRedirect}
        phoneNumbers={phoneNumbers}
        setPhoneNumbers={setPhoneNumbers}
        customQuestion1={customQuestion1}
        setCustomQuestion1={setCustomQuestion1}
        customQuestion2={customQuestion2}
        setCustomQuestion2={setCustomQuestion2}
      />
      <ContractSection
        contractImages={contractImages}
        setContractImages={setContractImages}
      />
       <NotationSection
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        total={total}
        setTotal={setTotal}
      />

<View style={styles.section}>
            <Text style={styles.sectionTitle}>Temps de mise en ligne</Text>
            <View style={styles.datePickerContainer}>
                <TouchableOpacity
                    style={styles.dateButton}
                    onPress={() => showDatePicker(setStartDate)}
                >
                    <Text style={styles.dateText}>DU : {startDate.toLocaleDateString()}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.dateButton}
                    onPress={() => showDatePicker(setEndDate)}
                >
                    <Text style={styles.dateText}>AU : {endDate.toLocaleDateString()}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.switchContainer}>
                <Text style={styles.switchLabel}>Renouvellement automatique</Text>
                <Switch
                    value={autoRenew}
                    onValueChange={setAutoRenew}
                    thumbColor={autoRenew ? '#0A5EDDFF' : '#ccc'}
                />
            </View>
            <TextInput
                style={styles.promoInput}
                placeholder="Code promo"
                placeholderTextColor="#888"
                value={promoCode}
                onChangeText={setPromoCode}
            />
            <Text style={styles.totalText}>Total : {total} €</Text>
        </View>

        <ContactsOptions
    gojobsMessaging={gojobsMessaging}
    setGojobsMessaging={setGojobsMessaging}
    call={call}
    setCall={setCall}
    phoneNumbers={phoneNumbers}
    setPhoneNumbers={setPhoneNumbers}
/>

      

      <TouchableOpacity style={styles.postAdButton}>
        <Text style={styles.postAdButtonText}>Post ad</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#1D222B',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  postAdButton: {
    backgroundColor: '#0A5EDDFF', // Couleur bleue comme dans l'image
    borderRadius: 12,
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  postAdButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  section: {
    backgroundColor: '#282A2B',
    borderRadius: 12,
    padding: 16,
    marginBottom: 25,
    marginTop:20
},
sectionTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
},
datePickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
},
dateButton: {
    backgroundColor: '#1F1F1F',
    padding: 12,
    borderRadius: 8,
},
dateText: {
    color: '#FFFFFF',
},
switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
},
switchLabel: {
    color: '#FFFFFF',
    fontSize: 14,
},
promoInput: {
    backgroundColor: '#1F1F1F',
    borderRadius: 8,
    padding: 12,
    color: '#FFFFFF',
    marginBottom: 16,
},
totalText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
},
});
