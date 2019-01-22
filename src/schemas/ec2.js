const { gql } = require('apollo-server');
module.exports = gql`
    type EC2 {
        instances: [Instance!]!
    }
    type InstanceMonitoring {
        State: String
    }
    type InstancePlacement {
        AvailabilityZone: String
        GroupName: String
        Tenancy: String
    }
    type InstanceState {
        Code: String
        Name: String
    }
    type InstanceEbs {
        AttachTime: String
        DeleteOnTermination: Boolean
        Status: String
        VolumeId: String
    }
    type InstanceBlockDeviceMapping {
        DeviceName: String
        Ebs: InstanceEbs
    }
    type PrivateIpAssociation {
        IpOwnerId: String
        PublicDnsName: String
        PublicIp: String
    }
    type InstanceNetworkInterfaceAssociation {
        IpOwnerId: String
        PublicDnsName: String
        PublicIp: String
    }
    type InstanceNetworkInterfaceAttachment {
        AttachTime: String
        AttachmentId: String
        DeleteOnTermination: Boolean
        DeviceIndex: Int
        Status: String
    }
    type SecurityGroup{
        GroupName: String
        GroupId: String
    }
    type InstancePrivateIpAddress {
        Association: PrivateIpAssociation
        Primary: Boolean
        PrivateDnsName: String
        PrivateIpAddress: String
    }
    type InstanceNetworkInterface {
        Association: InstanceNetworkInterfaceAssociation
        Attachment: InstanceNetworkInterfaceAttachment
        Description: String
        Groups: SecurityGroup
        Ipv6Addresses: [String]
        MacAddress: String
        NetworkInterfaceId: String
        OwnerId: String
        PrivateDnsName: String
        PrivateIpAddress: String
        PrivateIpAddresses: [InstancePrivateIpAddress]
        SourceDestCheck: Boolean
        Status: String
        SubnetId: String
        VpcId:String
    }
    type StateReason {
        Code: String
        Message: String
    }
    type Tag {
        key: String
        Value: String
    }
    type CpuOptions {
        CoreCount: Int
        ThreadsPerCore: Int
    }
    type HibernationOptions {
        configured: Boolean
    }
    type Instance {
        AmiLaunchIndex: Int
        ImageId:  String
        InstanceId : String
        InstanceType : String
        LaunchTime: String
        Monitoring: InstanceMonitoring
        Placement: InstancePlacement
        PrivateDnsName: String
        ProductCodes: [String]
        PublicDnsName: String
        State: InstanceState
        StateTransitionReason: String
        Architecture: String
        BlockDeviceMappings: [InstanceBlockDeviceMapping]
        ClientToken: String
        EbsOptimized: Boolean
        EnaSupport: Boolean
        Hypervisor: String,
        InstanceLifecycle: String
        NetworkInterfaces: [InstanceNetworkInterface]
        RootDeviceName: String
        RootDeviceType: String
        SecurityGroups: [SecurityGroup]
        SpotInstanceRequestId: String
        StateReason: StateReason
        Tags: [Tag],
        VirtualizationType: String
        CpuOptions: CpuOptions
        HibernationOptions: HibernationOptions
    }
`